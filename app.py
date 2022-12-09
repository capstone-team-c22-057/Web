import base64
import numpy as np
import io
from PIL import Image

import tensorflow as tf
from tensorflow.keras.applications.resnet50 import ResNet50, decode_predictions

from flask import request
from flask import jsonify
from flask import Flask
from keras.models import load_model

app = Flask(__name__) 

def get_fruit_model():
    model = load_model('fruit_model.h5')
    print("[+] model loaded")
    return model

def get_plant_model():
    model = load_model('plant_model.h5')
    print("[+] model loaded")
    return model

def decode_request(req):
    encoded = req["image"]
    decoded = base64.b64decode(encoded)
    return decoded

def preprocess(decoded):
    pil_image = Image.open(io.BytesIO(decoded)).resize((150,150), Image.LANCZOS).convert("RGB") 
    image = np.asarray(pil_image)
    batch = np.expand_dims(image, axis=0)
    
    return batch

fruit_model = get_fruit_model()
plant_model = get_plant_model()
 
@app.route("/fruitpredict", methods=["POST"])
def fruitpredict():

    print("[+] request received")

    req = request.get_json(force=True)

    image = decode_request(req)

    batch = preprocess(image)

    classes = fruit_model.predict(batch)

    if classes[0,0]==1:
        fruit_predict='Apel Segar'
    elif classes[0,1]==1:
        fruit_predict='Pisang Segar'
    elif classes[0,2]==1:
        fruit_predict='Jeruk Segar'
    elif classes[0,3]==1:
        fruit_predict='Apel Basi'
    elif classes[0,4]==1:
        fruit_predict='Pisang Basi'
    elif classes[0,5]==1:
        fruit_predict='Jeruk Basi'

    print(fruit_predict)

    response = {"prediction": fruit_predict}

    print("[+] results {}".format(response))

    return jsonify(response)

@app.route("/plantpredict", methods=["POST"])
def plantpredict():

    print("[+] request received")

    req = request.get_json(force=True)

    image = decode_request(req)

    batch = preprocess(image)

    classes = plant_model.predict(batch)

    if classes[0,0]==1:
        plant_predict='Keropeng Apel'
    elif classes[0,1]==1:
        plant_predict='Busuk Hitam (Apel)'
    elif classes[0,2]==1:
        plant_predict='Karat Cedar Apel'
    elif classes[0,3]==1:
        plant_predict='Apel Sehat'
    elif classes[0,4]==1:
        plant_predict='Bercak Daun Cercospora'
    elif classes[0,5]==1:
        plant_predict='Karat Biasa'
    elif classes[0,6]==1:
        plant_predict='Hawar Daun Jagung Utara'        
    elif classes[0,7]==1:
        plant_predict='Jagung Sehat'        
    elif classes[0,8]==1:
        plant_predict='Busuk Hitam (Anggur)'        
    elif classes[0,9]==1:
        plant_predict='Campak Hitam'        
    elif classes[0,10]==1:
        plant_predict='Bercak Daun Isariopsis'        
    elif classes[0,11]==1:
        plant_predict='Anggur Sehat'        

    print(plant_predict)

    response = {"prediction": plant_predict}

    print("[+] results {}".format(response))

    return jsonify(response)
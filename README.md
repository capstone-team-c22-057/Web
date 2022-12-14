# FresHeal - Project Capstone Studi Independen Kampus Merdeka X Dicoding team C22-057

[![FresHeal Cover.jpg](https://i.postimg.cc/1zcVFBD1/fresheal-cover.jpg)](https://postimg.cc/sBx2dpnT)

Kesegaran buah dan kesehatan tanaman seringkali memiliki permasalahan yang diakibatkan oleh beberapa faktor yang menyebabkan kerusakan kualitas buah dan tanaman. Diantaranya pada kesegaran buah biasanya disebabkan oleh beberapa hal seperti suhu, lamanya penyimpanan dan penyebab lainnya. Sedangkan pada tanaman seringkali terserang penyakit oleh hama, bakteri dan lainnya. Dari permasalahan yang sudah dijabarkan dibuatlah sebuah sistem aplikasi berbasis web yang dapat membantu mengatasi permasalahan pada sektor pertanian. Sistem aplikasi ini dibuat untuk membantu masyarakat agar lebih mudah dalam mendeteksi kesegaran buah dan kesehatan tanaman.  

# Resource 

## Tools
- Visual Studio Code
- Google Colab

## Programming dan Markup language
- HTML
- CSS
- JavaScript
- Python

## Library dan Framework
- TensorFlow
- Keras
- matplotlib
- pathlib
- Scikit-Learn
- numpy
- shutill
- Opendatasets
- bootstrap
- Flask
- Gunicorn 

## Algoritma
contvulitional  neural network __CNN__
dengan hasil accuracy dan val accuracy pada deteksi buah adalah 96% sedengkan pada deteksi tanaman accuracy 96% dan val accuracy 94%

## Model Deteksi
- [Model Plant Health](https://github.com/capstone-team-c22-057/Machine_Learning/blob/main/Plant_Health_Detection.ipynb)
- [Model Fruit Freshness](https://github.com/capstone-team-c22-057/Machine_Learning/blob/main/model_fresh_fruit_final.ipynb)

## Dataset
- [Tanaman](https://www.kaggle.com/datasets/abdallahalidev/plantvillage-dataset)
- [Buah](https://www.kaggle.com/datasets/raghavrpotdar/fresh-and-stale-images-of-fruits-and-vegetables?select=stale_bitter_gourd)

# Documentation
1. Clone this repository
```
git clone https://github.com/capstone-team-c22-057/Web.git
```

2. Download file [fruit_model.h5](https://drive.google.com/file/d/1kdHCzwEiI_rTrbxO74IY05bikF2TqVxn/view?usp=share_link) and [plant_model.h5](https://drive.google.com/file/d/1-5ex690e86hgJR31KCO6CTvo-07O4pJt/view?usp=share_link)

3. Create folder static

4. Move this folder and file to folder static:
- node_modules
- script
- src
- index.html
- package.json
- package-lock.json
- README.md

5. Go to folder Web
```
cd (web directory)
```

6. Run with Flask Environment
```
python -m venv venv
pip install virtualenv

virtualenv ???-system-site-packages -p python ./venv
.\venv\Scripts\activate

pip install flask
pip install numpy
pip install pillow
pip install tensorflow-cpu

set FLASK_ENV=development
flask run
```
7. Open in browser: http://127.0.0.1:5000/static/index.html

Or you can or you can directly visit our website
#### [**Click here to view Fresheal**](https://fresheal.netlify.app/)


# Team C22-057
1. M167X0279 - [M Rama Nopan Ariyadi](https://www.instagram.com/mrama_1011/) - Machine Learning Developer
2. M263X0585 - [Dafa Arif Nurkholis](https://www.instagram.com/dafarifn20/) - Front-End Web Developer
3. M404X0970 - [Wahyu Nanda Nicola](https://www.instagram.com/wahyunicola/) - Machine Learning Developer 
4. M183X0348 - [Muhammad Zhafran Ghaly](https://www.instagram.com/zhafran_ghaly/) - Front-End Web Developer

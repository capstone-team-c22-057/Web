const fruitFreshnessSelection = document.getElementById('fruit-freshness-selection');
const plantHealthSelection = document.getElementById('plant-health-selection');

const beforeChooseDisplay = document.getElementById('before-choose-display');
const fruitFreshnessDisplay = document.getElementById('fruit-freshness-display');
const plantHealthDisplay = document.getElementById('plant-health-display');

const uploadFruitImage = document.getElementById('upload-fruit-image');
const uploadPlantImage = document.getElementById('upload-plant-image');
const selectedFruitImage = document.getElementById('selected-fruit-image');
const selectedPlantImage = document.getElementById('selected-plant-image');
const fruitFreshnessImageDetection = document.getElementById('fruit-freshness-image-detection');
const plantHealthImageDetection = document.getElementById('plant-health-image-detection');

const fruitDetectionResult = document.getElementById('fruit-detection-result');
const plantDetectionResult = document.getElementById('plant-detection-result');
const fruitImageResult = document.getElementById('fruit-image-result');
const plantImageResult = document.getElementById('plant-image-result');
const fruitPrediction = document.getElementById('fruit-prediction');
const plantPrediction = document.getElementById('plant-prediction');
const fruitDescription = document.getElementById('fruit-description');
const plantDescription = document.getElementById('plant-description');

const fruitFreshnessImageDelete = document.getElementById('fruit-freshness-image-delete');
const plantHealthImageDelete = document.getElementById('plant-health-image-delete');

//Fungsi Pemilihan Model
fruitFreshnessSelection.addEventListener('click', function () {
    fruitFreshnessDisplay.removeAttribute('hidden');
    fruitFreshnessSelection.setAttribute('style', 'background-color: whitesmoke;');
    
    beforeChooseDisplay.setAttribute('hidden', true);
    plantHealthDisplay.setAttribute('hidden', true);
    plantHealthSelection.removeAttribute('style');
});

plantHealthSelection.addEventListener('click', function () {
    plantHealthDisplay.removeAttribute('hidden');
    plantHealthSelection.setAttribute('style', 'background-color: whitesmoke;');

    beforeChooseDisplay.setAttribute('hidden', true);
    fruitFreshnessDisplay.setAttribute('hidden', true);
    fruitFreshnessSelection.removeAttribute('style');
});


//Fungsi Deteksi
fruitFreshnessImageDetection.addEventListener('click', function () {
    const fruitImage = selectedFruitImage.getAttribute('src');
    if (fruitImage){
        fruitDetectionResult.removeAttribute('hidden');
        fruitImageResult.setAttribute('src', fruitImage);

        plantDetectionResult.setAttribute('hidden', true);

        let message = {image: base64Image}
            $.post("http://127.0.0.1:5000/fruitpredict", JSON.stringify(message), function(response){
                fruitPrediction.innerText = response.prediction;
                
                if (fruitPrediction.innerText == 'Apel Segar'){
                    fruitDescription.innerHTML = 
                    `Buah apel diketahui rendah kalori serta mengandung beragam vitamin dan mineral, seperti vitamin A, vitamin B6 vitamin C, dan kalium. Tak hanya itu, buah apel juga mengandung antioksidan, seperti flavonoid, dan pektin yang baik bagi kesehatan tubuh dan mencegah berbagai penyakit. Anda bisa mengonsumsi buah apel dengan berbagai cara, baik dimakan langsung, dibuat jus, atau dijadikan salad buah.<br><br>
                    <h5>Cara menjaganya agar buah apel tetap segar:</h5>
                    <ul>
                        <li>Pisahkan apel yang busuk atau hampir busuk.</li>
                        <li>Simpan apel di tempat gelap dan sejuk.</li>
                        <li>Bungkus apel sebelum disimpan.</li>
                        <li>Bekukan apel.</li>
                        <li>Jangan simpan dengan sayuran atau buah lainnya.</li>
                    </ul>`;
                } else if (fruitPrediction.innerText == 'Jeruk Segar'){
                    fruitDescription.innerHTML = 
                    `Buah jeruk menjadi salah satu buah yang dinilai cukup baik dalam meningkatkan imun tubuh seseorang. Hal ini disebabkan jeruk merupakan sumber vitamin C yang sangat baik. Tidak hanya itu, dalam satu buah jeruk juga mengandung vitamin dan mineral lain yang dibutuhkan, seperti vitamin B1, folat, hingga potassium.<br><br>
                    <h5>Cara menjaganya agar buah jeruk tetap segar:</h5>
                    <ul>
                        <li>Menyimpan secara utuh.</li>
                        <li>Jika jeruk sudah dikupas, bungkus irisan jeruk, bagian, atau irisan dengan plastik atau penyimpanan yang dapat digunakan kembali. Tempatkan potongan jeruk yang dibungkus dalam wadah kedap udara. Lalu, simpan lemari es, jeruk akan bertahan selama tiga hingga empat hari.</li>
                        <li>Dibekukan.</li>
                    </ul>`;
                } else if (fruitPrediction.innerText == 'Pisang Segar'){
                    fruitDescription.innerHTML = 
                    `Pisang telah menjadi salah satu buah yang paling umum dikonsumsi oleh masyarakat Indonesia. Buah ini memang tumbuh subur di negara-negara tropis, seperti Indonesia. Begitu banyak kebaikan yang terkandung di dalam sebuah pisang. Kandungan nutrisi di dalamnya meliputi karbohidrat, protein, mangan, vitamin A, vitamin B, vitamin C, serat, kalium, dan magnesium.<br><br>
                    <h5>Cara menjaganya agar buah pisang tetap segar:</h5>
                    <ul>
                        <li>Gantungkan pisang.</li>
                        <li>Bungkus pangkal batang buah pisang.</li>
                        <li>Menyimpan di suhu rendah.</li>
                        <li>Tidak mencampurnya dengan berbagai buah.</li>
                    </ul>`;
                } else if (fruitPrediction.innerText == 'Apel Basi'){
                    fruitDescription.innerHTML = 
                    `Buah apel yang membusuk menghasilkan mikotoksin yang disebut patulin, racun yang diproduksi oleh spesies Penicillium expansum. Ketika dikonsumsi dalam jumlah besar, mikotoksin bisa menyebabkan mual, mengganggu bakteri usus baik, pendarahan ulkus bahkan meningkatkan risiko kanker. Bahkan bisa meningkatkan risiko penyakit lain karena mikotoksin dapat melemahkan sistem imun tubuh.<br><br>
                    <h5>Cara mencegahnya agar buah apel tidak basi:</h5>
                    <ul>
                        <li>Bungkus apel secara terpisah untuk penyimpanan jangka panjang.</li>
                        <li>Gunakan air lemon untuk mencegah apel iris atau apel tanpa kulit menjadi cokelat.</li>
                        <li>Jangan simpan apel dan sayuran berdekatan.</li>
                        <li>Periksa kematangan apel sebelum membeli.</li>
                        <li>Apel akan lebih awet disimpan di lemari es.</li>
                    </ul>`;
                } else if (fruitPrediction.innerText == 'Jeruk Basi'){
                    fruitDescription.innerHTML = 
                    `Jeruk dapat diolah menjadi jus. Namun, bagaimana jika buah jeruk yang diolah merupakan jeruk basi? Ketika jus jeruk kedaluwarsa atau rusak, bakteri berbahaya memecah dan mengubah kandungan jus menjadi alkohol dan gula dan secara bertahap, menjadi beracun. Menurut Ohio State University, jus jeruk yang kadaluarsa dapat menyebabkan muntah, mual, dan diare.<br><br>
                    <h5>Cara mencegahnya agar buah jeruk tidak basi:</h5>
                    <ul>
                        <li>Masukkan ke dalam plastik tertutup.</li>
                        <li>Bekukan jeruk.</li>
                    </ul>`;
                } else if (fruitPrediction.innerText == 'Pisang Basi'){
                    fruitDescription.innerHTML = 
                    `Salah satu ciri pisang yang sudah tidak layak konsumsi adalah pada bagian kulit luarnya sudah berwarna hitam hingga ke bagian daging buahnya. Selain itu, waspada jika pisang sudah berbau seperti bau busuk. Jika pisang sudah berbau busuk, itu tandanya sudah mengandung banyak mikroorganisme sehingga tidak layak konsumsi.<br><br>
                    <h5>Cara mencegahnya agar buah pisang tidak basi:</h5>
                    <ul>
                        <li>Tetap gunakan bungkus plastik.</li>
                        <li>Tambahkan asam sitrat.</li>
                        <li>Jauhkan dari sinar matahari langsung.</li>
                    </ul>`;
                }
                
                console.log(response);
        });
    } else {
        alert ('Masukkan gambar terlebih dahulu!');
    }
});

plantHealthImageDetection.addEventListener('click', function () {
    const plantImage = selectedPlantImage.getAttribute('src');
    if (plantImage){
        plantDetectionResult.removeAttribute('hidden');
        plantImageResult.setAttribute('src', plantImage);

        fruitDetectionResult.setAttribute('hidden', true);

        let message = {image: base64Image}
            $.post("http://127.0.0.1:5000/plantpredict", JSON.stringify(message), function(response){
                plantPrediction.innerText = response.prediction;
                
                if (plantPrediction.innerText == 'Apel Sehat'){
                    plantDescription.innerHTML = 
                    `Tanaman apel dapat tumbuh dan berbuah baik pada ketinggian (700-1200 m) dan dengan ketinggian optimal (1000-1.200 m). Tanaman Apel yang sehat dapat kita lihat dari daun maupun buahnya sebagai indikator. Pada daun apel yang sehat akan berwarna hijau dan tidak terdapat bercak- bercak penyakit. Begitu juga dengan buahnya, buah apel memiliki permukaan luar yang mulus tanpa bercak-bercak.<br><br>
                    <h5>Cara merawatnya agar tanaman apel tetap sehat:</h5>
                    Membuat pestisida alami untuk menghindarkan tanaman dari serangan hama dan penyakit. Dan juga berikan pupuk agar tanaman tetap sehat serta tidak kekurangan nutrisi.
                    `;
                } else if (plantPrediction.innerText == 'Keropeng Apel'){
                    plantDescription.innerHTML = 
                    `Keropeng apel (Apple Scab) merupakan penyakit tanaman apel yang disebabkan oleh jamur Venturia inaequalis yang penyebarannya melalui spora udara. Jamur ini menginfeksi pada daun serta buah. Daun yang terinfeksi memiliki bintik-bintik hijau hingga coklat. Jika sudah terdapat banyak bintiknya maka daun akan menguninng dan cepat rontok.<br><br>
                    <h5>Penanganan untuk keropeng apel (Apple Scab):</h5>
                    Fungsida dapat digunakan untuk mengatasi Apple Scab ini. Penyemprotan dilakukan pada waktu yang tepat agar fungisida mampu mengendalikan penyakit ini.
                    `;
                } else if (plantPrediction.innerText == 'Busuk Hitam (Apel)'){
                    plantDescription.innerHTML = 
                    `Busuk hitam pada apel (Apple Black Rot) adalah penyakit pada tanaman apel yang menginfeksi buah, daun dan kulit kayu. Penyakit ini disebabkan oleh jamur Botryosphaeria obtusa. Gejala awalnya berupa bintik-bintik ungu pada permukaan daun. Seiring waktu bintik-bintik akan melebar dan daun yang sudah terinfeksi banyak akan rontok.<br><br>
                    <h5>Penanganan untuk busuk hitam pada apel (Apple Black Rot):</h5>
                    Mengobati Apple Black Rot dapat dimulai dengan melakukan sanitasi. Daun, buah, dan kulit pohon yang jatuh karena terinfeksi jamur segera untuk dijauhkan dari sekitaran pohon.
                    `;
                } else if (plantPrediction.innerText == 'Karat Cedar Apel'){
                    plantDescription.innerHTML = 
                    `Karat cedar apel (Cedar Apple Rust) adalah penyakit jamur yang menginfeksi pohon apel serta cedar merah. Spora jamur ini mampu menginfeksi dari satu pohon ke pohon lainnya. Penyakit tanaman ini dapat merusak pohon serta buah apel secara cepat.<br><br>
                    <h5>Penanganan untuk karat cedar apel (Cedar Apple Rust):</h5>
                    Penyakit tanaman ini bisa ditanangani dengan fungisida. Fungisida harus disemprotkan secara berkala agar daun dan buah apel yang masih sehat tidak ikut terkena jamur.
                    `;
                } else if (plantPrediction.innerText == 'Jagung Sehat'){
                    plantDescription.innerHTML = 
                    `Tanaman jagung yang sehat bisa dilihat dari daun serta batang nya yang mulus, berwarna hijau tanpa bercak-bercak. Tanaman jagung merupakan salah satu jenis tanaman pangan dari keluarga rumput-rumputan yang digolongkan dalam tanaman biji-bijian. Syarat tumbuh tanaman jagung beriklim subtropis atau tropis dan didaerah terletak antara 0-500 LU hingga 0-400 LS. Serta suhu optimimum yang baik adalah 21-34 C.<br><br>
                    <h5>Cara merawatnya agar tanaman jagung tetap sehat:</h5>
                    <ul>
                        <li>
                        <b>Penjarangan dan Penyulaman</b>
                        <p>Proses ini dilakukan pada saat tanam ada dua atau lebih benih jagung yang tertanam, sehingga tumbuh dua atau lebih tanaman jagung.</p>
                        </li>
                        <li>
                        <b>Penyiangan</b>
                        <p>Melakukan proses pembersihan tanaman yang pengganggu di sekitar tanaman jagung, seperti rumput, krokot, keladi dan tanaman pengganggu lainnya.</p>
                        </li>
                        <li>
                        <b>Pembumbunan</b>
                        <p>Pelaksanaannya dapat dilakukan secara bersamaan saat proses penyiangan dengan tujuan memperkuat akar tanaman serta membantu mempercepat pertumbuhan.</p>
                        </li>
                    </ul>`;
                } else if (plantPrediction.innerText == 'Bercak Daun Cercospora'){
                    plantDescription.innerHTML = 
                    `Bercak daun cercospora (Corn Cercospora Leaf Spot Gray) sesuai dengan namanya tanaman jagung yang terinfeksi daunnya terdapat  bercak nekrotik kecil berwarna coklat dan abu-abu yang dikelilingi lingkaran berwarna kuning. Bercak ini dapat menyatu dan merusak seluruh daun. Penyakit ini disebabkan infeksi jamur Cercospora zeae-maydis. Jamur menyelesaikan siklus hidupnya (dari infeksi ke produksi spora baru) dalam 14-21 hari pada varietas yang rentan dan dalam 21-28 hari dalam varietas yang tahan.<br><br>
                    <h5>Penanganan untuk bercak daun cercospora (Corn Cercospora Leaf Spot Gray):</h5>
                    Penyakit ini dapat ditangani dengan fungsida, tetapi harus juga mempertimbangkan kondisi cuaca dan kerentanan tanaman.  Fungisida yang mengandung piraklostrobin dan strobilurin, atau kombinasi azoksistrobin dan propikonazol, protiokonazol dan trifloksistrobin bekerja dengan baik untuk membasmi jamur.
                    `;
                } else if (plantPrediction.innerText == 'Karat Biasa'){
                    plantDescription.innerHTML = 
                    `Karat biasa (Corn Common Rust) adalah penyakit yang disebabkan oleh jamur Puccinia sorghi. Gejala pada penyakit ini berupa flek-flek kecil muncul di kedua sisi daun dan perlahan berkembang menjadi bercak-bercak kecil berwarna kecoklatan. Bercak-bercak yang memanjang ini kemudian berubah menjadi bintil-bintil seperti tepung, berwarna coklat keemasan yang tersebar dalam jarak yang renggang di sisi atas dan bawah. Warnanya bisa berubah menjadi hitam saat tanaman matang.<br><br>
                    <h5>Penanganan untuk karat biasa (Corn Common Rust):</h5>
                    Penanganannya berupa penyemprotan fungisida. Penyemprotan disarankan pada varietas yang rentan. Jika telah muncul bintil-bintil pada daun, dapat langsung segera disemprotkan fungisida ini. Ulangi penyemprotan selama 10 hari.
                    `;
                } else if (plantPrediction.innerText == 'Hawar Daun Jagung Utara'){
                    plantDescription.innerHTML = 
                    `Hawar daun jagung utara (Corn Northen leaf Blight) adalah penyakit tanaman jagung yang sebabkan oleh infeksi jamur. Jamur dibawa oleh angin atau cipratan air hujan. Daun yang paling bawah adalah daun yang paling mudah terkena infeksi ini. Gejalanya berupa bercak-bercak kecil hingga lonjong. Bercak yang sudah tua akan perlahan melebar dan menyatu dengan bercak lain.<br><br>
                    <h5>Penanganan untuk hawar daun jagung utara (Corn Northen leaf Blight):</h5>
                    Penanganan dapat menggunakan fungisida alami dan kimawi. Untuk yang fungisida alami bisa menggunakan Trichoderma harzianum atau Bacillus subtilis. Untuk fungisida kimia bisa menggunakan azoksistrobin, pikoksistrobin, mankozeb, piraklostrobin, propikonazol, tetrakonazol. Berikan produk berbasis pikoksistrobin + siprokonazol, piraklostrobin + metkonazol, propikonazol + azoksistrobin, protiokonazol + trifloksistrobin.
                    `;
                } else if (plantPrediction.innerText == 'Anggur Sehat'){
                    plantDescription.innerHTML = 
                    `Tanaman anggur yang sehat dapat dilihat dari  daunnya yang hijau tanpa bercak-bercak dan buahnya yang mulus tanpa bercak. Tanaman anggur merupakan tanaman merambat yang termasuk dalam keluarga Vitaeae.  Buah anggur mengandung banyak senyawa polifenol dan resveratol yang berperan aktif dalam berbagai metabolisme tubuh, serta mampu mencegah terbentuknya sel kanker dan berbagai penyakit lainnya.<br><br>
                    <h5>Cara merawatnya agar tanaman anggur tetap sehat:</h5>
                    <ul>
                        <li>Melakukan penyiraman 3 kali seminggu.</li>
                        <li>Memastikan tanaman terkena sinar matahari.</li>
                        <li>Memberi pupuk yang tepat.</li>
                        <li>Mengecek kondisi tanah.</li>
                    </ul>`;
                } else if (plantPrediction.innerText == 'Busuk Hitam (Anggur)'){
                    plantDescription.innerHTML = 
                    `Busuk hitam pada anggur (Grape Black Rot) adalah penyakit yang gejalanya terdapat bintik-bintik yang tidak beraturan pada daun, di tepian bercak tersebut dikelilingi oleh garis gelap. Batang dan tangkai daun juga bisa terdapatbintik-bintik. Penyebabnya adalah jamur Phyllosticta ampelicida. Penyebaran spora jamur pada saat hujan ringan dan disebarkan melalui angin. Jamur ini akan banyak saat cuaca lembab.<br><br>
                    <h5>Penanganan untuk busuk hitam pada anggur (Grape Black Rot):</h5>
                    Penangan menggunakan zat kimia dengan menyemprotkan kaptan + mankozeb + mikobutanil. Penyemprotan ini dilakukan kira-kira 2 minggu sebelum mekar.
                    `;
                } else if (plantPrediction.innerText == 'Campak Hitam'){
                    plantDescription.innerHTML = 
                    `Campak hitam (Black Measles) adalah penyakit tanaman yang disebabkan oleh jamur Togninia minima. Jamur akan bertahan hidup pada saat musim dingin. Gejala penyakit ini yakni terdapat garis ‘interveinal’ pada daun, gejalanya juga ditandai perubahan warna dan terjadi pengeringan jaringan di sekitar saraf utama daun. Daun yang terinfeksi bisa mengering serta rontok.<br><br>
                    <h5>Penanganan untuk campak hitam (Black Measles):</h5>
                    Buang dan musnahkan sisa-sisa tanaman yang terinfeksi jamur dari sekitar tanaman.
                    `;
                } else if (plantPrediction.innerText == 'Bercak Daun Isariopsis'){
                    plantDescription.innerHTML = 
                    `Gejala pada penyakit bercak daun isariopsis (Isariopsis Leaf Spot) adalah terdapat bercak-bercak yang bentuknya tidak beraturan (diameter 2 -25 mm).  Awalnya lesi berwarna merah kusam hingga coklat kemudian berubah menjadi hitam. Penyakit tanaman ini disebabkan infeksi jamur.<br><br>
                    <h5>Penanganan untuk bercak daun isariopsis (Isariopsis Leaf Spot):</h5>
                    Penanganan dapat dilakukan dengan cara menyemprotkan fungisida pada tanaman yang terinfeksi jamur ini.
                    `;
                }

                console.log(response);
        });
    } else {
        alert ('Masukkan gambar terlebih dahulu!');
    }
});

//Fungsi Hapus
fruitFreshnessImageDelete.addEventListener('click', function () {
    selectedFruitImage.removeAttribute('src');
});

plantHealthImageDelete.addEventListener('click', function () {
    selectedPlantImage.removeAttribute('src');
});

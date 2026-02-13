# Yerel Satıcıları Gizle (Temu)

Bu Firefox eklentisi, Temu web sitesinde gezinirken yerel satıcılar tarafından satılan ürünleri otomatik olarak gizler ve yalnızca Temu tarafından doğrudan satılan (gönderilen) ürünleri görüntüler.

## Özellikler

-   Sayfadaki "Yerel Depodan" (Local Warehouse) ibaresi bulunan ürünleri otomatik olarak tespit eder.
-   Bu ürünleri listeden kaldırarak daha temiz bir görünüm sağlar.

## Kurulum

### Firefox'a Yükleme (Geliştirici Modu)

Bu eklenti Firefox Add-ons mağazasında bulunmamaktadır. Manuel olarak yüklemek için aşağıdaki adımları izleyin:

1.  **İndirme:**
    Eklentinin son sürümünü şu bağlantıdan indirin: [İndir (ZIP)](https://bit.ly/remove-local-temu)

2.  **Dosyaları Çıkarma:**
    İndirdiğiniz `.zip` dosyasını sağ tıklayıp "Tümünü Ayıkla" veya "Buraya Çıkart" diyerek bir klasöre çıkartın.

3.  **Firefox about:debugging Sayfasını Açma:**
    Firefox tarayıcısını açın ve adres çubuğuna şunu yazıp Enter'a basın:
    `about:debugging#/runtime/this-firefox`

4.  **Eklentiyi Yükleme:**
    "Geçici Eklenti Yükle" (Load Temporary Add-on) butonuna tıklayın.

5.  **Dosya Seçme:**
    2. adımda ayıkladığınız klasörden `manifest.json` dosyasını seçin ve "Aç" butonuna tıklayın.

Tebrikler! Eklenti başarıyla yüklendi. Artık Temu'da gezinirken eklenti otomatik olarak çalışacaktır.

> **Not:** Geçici eklentiler Firefox'u yeniden başlattığınızda kaldırılır. Kalıcı kurulum için eklentiyi paketlemeniz veya Firefox Developer Edition kullanmanız gerekir.

## Geliştiren

**Sezer İltekin** - [x.com/sezeriltekin](https://x.com/sezeriltekin)


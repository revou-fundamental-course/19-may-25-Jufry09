// Celcius to Fahrenheit
/**
 * convertToFahrenheit
 * Fungsi ini mengkonversi suhu dari Celcius ke Fahrenheit.
 * Langkah-langkah:
 * 1. Mengambil nilai input suhu dalam Celcius dari elemen input.
 * 2. Memvalidasi apakah input merupakan angka yang valid.
 * 3. Jika valid, menghitung konversi ke Fahrenheit dengan rumus (C * 9/5) + 32.
 * 4. Menampilkan hasil konversi dengan 2 angka di belakang koma pada elemen output.
 * 5. Menampilkan penjelasan detail perhitungan pada elemen penjelasan.
 * 6. Jika input tidak valid, mengosongkan output dan menampilkan pesan error.
 */
function convertToFahrenheit() {
    const celsiusInput = document.getElementById('input-suhu');
    const fahrenheitOutput = document.getElementById('hasil-suhu');
    const explanation = document.getElementById('detail-suhu');
    const celsius = parseFloat(celsiusInput.value);

    // validasi input kosong atau bukan angka
    if (isNaN(celsius)) {
        celsiusInput.classList.add('input-error');
        fahrenheitOutput.value = '';
        explanation.value = 'Masukkan suhu dalam Celsius yang valid.';
        return;
    } else {
        celsiusInput.classList.remove('input-error');
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitOutput.value = fahrenheit.toFixed(2);
    explanation.value = `${celsius}°C x (9/5) + 32 adalah ${fahrenheit.toFixed(2)}°F.`;
}

// Reverse Conversion
/**
 * reverseConversion
 * Fungsi ini mengkonversi suhu dari Fahrenheit kembali ke Celcius.
 * Langkah-langkah:
 * 1. Mengambil nilai suhu Fahrenheit dari elemen output.
 * 2. Memeriksa apakah ada nilai Fahrenheit yang tersedia untuk dikonversi.
 * 3. Membersihkan nilai input dengan menghapus simbol selain angka dan tanda minus/desimal.
 * 4. Memvalidasi apakah nilai Fahrenheit yang sudah dibersihkan valid.
 * 5. Jika valid, menghitung konversi ke Celcius dengan rumus (F - 32) × 5/9.
 * 6. Menampilkan hasil konversi pada elemen input Celcius dengan 2 angka di belakang koma.
 * 7. Mengosongkan nilai Fahrenheit dan menampilkan penjelasan detail perhitungan.
 * 8. Jika tidak valid, menampilkan pesan error pada elemen penjelasan.
 */
function reverseConversion() {
    const celsiusInput = document.getElementById('input-suhu');
    const fahrenheitOutput = document.getElementById('hasil-suhu');
    const explanation = document.getElementById('detail-suhu');

    const fahrenheitText = fahrenheitOutput.value;

    if (!fahrenheitText) {
        explanation.value = 'Tidak ada nilai Fahrenheit untuk di konversi balik.';
        return;
    }

    // Ambil angka saja, buang simbol " °F" jika ada
    const fahrenheit = parseFloat(fahrenheitText.replace(/[^\d.-]/g, ''));

    if (isNaN(fahrenheit)) {
        explanation.value = 'Format Fahrenheit tidak valid.';
        return;
    }

    const celsius = (fahrenheit - 32) * 5 / 9;

    // isi ulang input dan kosongkan hasil
    celsiusInput.value = celsius.toFixed(2);
    fahrenheitOutput.value = '';
    explanation.value = `(${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
}

// Reset
/**
 * resetForm
 * Fungsi ini mereset form konversi suhu.
 * Langkah-langkah:
 * 1. Mengosongkan nilai input suhu Celcius.
 * 2. Mengosongkan nilai output suhu Fahrenheit.
 * 3. Mengosongkan teks penjelasan detail perhitungan.
 */
function resetForm() {
    const celsiusInput = document.getElementById('input-suhu');
    const fahrenheitOutput = document.getElementById('hasil-suhu');
    const explanation = document.getElementById('detail-suhu');

    celsiusInput.value = '';
    fahrenheitOutput.value = '';
    explanation.value = '';
}
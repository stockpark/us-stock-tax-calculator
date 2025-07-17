// ocr-worker.js
import Tesseract from 'tesseract.js';

export async function recognizeTextFromImage(file) {
  const { data } = await Tesseract.recognize(file, 'eng+kor', {
    logger: m => console.log(m),
  });
  return data.text;
}

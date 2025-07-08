import barcode
from barcode.writer import ImageWriter

for i in range(1, 11):
    code = str(i).zfill(3)  # 001, 002, ..., 010
    ean = barcode.get('code128', code, writer=ImageWriter())
    ean.save(f"barcode_{code}")

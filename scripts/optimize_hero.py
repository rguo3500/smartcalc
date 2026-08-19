from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets/smartcalc-hero-paper.jpg')
out_dir = Path('/home/ubuntu/webdev-static-assets')
with Image.open(source) as image:
    image = image.convert('RGB')
    print('source:', image.size, image.mode)
    image.thumbnail((1600, 1200), Image.Resampling.LANCZOS)
    image.save(out_dir / 'smartcalc-hero-paper-optimized.webp', 'WEBP', quality=72, method=6)
    image.save(out_dir / 'smartcalc-hero-paper-optimized.jpg', 'JPEG', quality=78, optimize=True, progressive=True)
    print('optimized:', image.size)

from PIL import Image
import os


def compress_image(input_path, output_path, quality=80):
    with Image.open(input_path) as image:
        image.save(output_path, optimize=True, quality=quality)

    input_size = os.path.getsize(input_path)
    output_size = os.path.getsize(output_path)
    compression_ratio = round((output_size / input_size) * 100, 2)

    print(f"Compressed image saved at: {output_path}")
    print(f"Original size: {input_size} bytes")
    print(f"Compressed size: {output_size} bytes")
    print(f"Compression ratio: {compression_ratio}%")


def compress_images_in_folder(folder_path, quality=80):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith((".jpg", ".jpeg", ".png", ".svg")):
                input_path = os.path.join(root, file)
                output_path = os.path.join(root, f"{{new}}_{file}")
                compress_image(input_path, output_path, quality)


# Example usage
folder_path = "./"
compression_quality = 80

compress_images_in_folder(folder_path, compression_quality)

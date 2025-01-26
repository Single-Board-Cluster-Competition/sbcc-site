from PIL import Image, ImageDraw, ImageFont
import datetime

# Load the image
image_path = './mstile-310x310.png'
image = Image.open(image_path)

cropping = 75
left = cropping
top = cropping
right = image.width - cropping
bottom = image.height - cropping
image = image.crop((left, top, right, bottom))

# Create a new image with extra space for the text
new_width = 1000
new_height = image.height
new_image = Image.new('RGBA', (new_width, new_height), (255, 255, 255, 0))



# Paste the original image onto the new image
new_image.paste(image, (0, 0))

# Get the current year
current_year = datetime.datetime.now().year

# Prepare the text
text = f'SBCC\n{current_year}'

# Load a font
font_path = 'C:/Users/caspe/Downloads/dejavu-fonts-ttf-2.37/dejavu-fonts-ttf-2.37/ttf/DejaVuSansMono-Bold.ttf'  # You can change this to the path of your preferred font
font_size = 160
font = ImageFont.truetype(font_path, font_size)

# Create a drawing context
draw = ImageDraw.Draw(new_image)

# Calculate the position for the text
text_x = image.width- 50
text_y = (new_height - font_size) // 10

# Draw the text onto the new image
draw.text((text_x, text_y), text, font=font, fill=(6, 0, 80, 255))

# Save the new image
output_path = './img/Current-Year-Logo.png'
new_image.save(output_path)

print(f'Logo saved as {output_path}')
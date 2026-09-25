from PIL import Image, ImageDraw, ImageFont
import os

im_before = Image.open('/tmp/panel_before.png')
im_after = Image.open('/tmp/panel_after.png')

PANEL_W = 1600
PANEL_H = 580
HEADER_H = 50
DIVIDER_H = 20
TOTAL_H = HEADER_H + PANEL_H + DIVIDER_H + HEADER_H + PANEL_H  # 1280

canvas = Image.new('RGB', (PANEL_W, TOTAL_H), (245, 243, 240))
draw = ImageDraw.Draw(canvas)

font_pill = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 13)
font_sub = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 14)

# ==========================================
# PANEL 1: BEFORE (MARCH 2021)
# ==========================================
y = 0
# Header background bar
draw.rectangle([0, y, PANEL_W, y + HEADER_H], fill=(248, 245, 241))
draw.line([0, y + HEADER_H - 1, PANEL_W, y + HEADER_H - 1], fill=(225, 220, 212), width=1)

# Pill badge
p1_badge = 'BEFORE (MARCH 2021):'
bb1 = font_pill.getbbox(p1_badge)
pw1 = bb1[2] - bb1[0] + 20
draw.rounded_rectangle([32, y + 10, 32 + pw1, y + 40], radius=15, fill=(254, 226, 226))
draw.text((42, y + 17), p1_badge, fill=(185, 28, 28), font=font_pill)

# Subtitle description
draw.text((32 + pw1 + 14, y + 17), 'Ad-hoc layouts, unstandardized buttons, fragmented tokens', fill=(75, 85, 99), font=font_sub)

# Paste before panel (March 2021 layout)
y += HEADER_H
canvas.paste(im_before.crop((0, 0, PANEL_W, PANEL_H)), (0, y))

# Divider spacer between panels
y += PANEL_H
draw.rectangle([0, y, PANEL_W, y + DIVIDER_H], fill=(240, 238, 234))
draw.line([0, y + DIVIDER_H // 2, PANEL_W, y + DIVIDER_H // 2], fill=(215, 210, 202), width=1)

# ==========================================
# PANEL 2: AFTER (SEPTEMBER 2021)
# ==========================================
y += DIVIDER_H
# Header background bar
draw.rectangle([0, y, PANEL_W, y + HEADER_H], fill=(239, 246, 255))
draw.line([0, y + HEADER_H - 1, PANEL_W, y + HEADER_H - 1], fill=(219, 234, 254), width=1)

# Pill badge
p2_badge = 'AFTER (SEPTEMBER 2021):'
bb2 = font_pill.getbbox(p2_badge)
pw2 = bb2[2] - bb2[0] + 20
draw.rounded_rectangle([32, y + 10, 32 + pw2, y + 40], radius=15, fill=(219, 234, 254))
draw.text((42, y + 17), p2_badge, fill=(29, 78, 216), font=font_pill)

# Subtitle description
draw.text((32 + pw2 + 14, y + 17), 'Standardized 40+ React component library, unified UI kit, cohesive design tokens', fill=(30, 58, 138), font=font_sub)

# Paste after panel (September 2021 layout)
y += HEADER_H
canvas.paste(im_after.crop((0, 0, PANEL_W, PANEL_H)), (0, y))

# Output paths
out_png = 'public/work/kiddom-component-transformation.png'
out_webp = 'public/work/kiddom-component-transformation.webp'

# 256-color median-cut palette quantization for pristine PNG
canvas_q = canvas.quantize(colors=256, method=Image.Quantize.MEDIANCUT)
canvas_q.save(out_png, optimize=True)

# High-fidelity WebP at quality 85
canvas.save(out_webp, 'WEBP', quality=85)

png_size = os.path.getsize(out_png) / 1024
webp_size = os.path.getsize(out_webp) / 1024

print(f"Dimensions: {canvas.size}")
print(f"PNG:  {png_size:.1f} KB (budget <= 300 KB) -> {'PASS' if png_size <= 300 else 'FAIL'}")
print(f"WebP: {webp_size:.1f} KB (budget <= 150 KB) -> {'PASS' if webp_size <= 150 else 'FAIL'}")

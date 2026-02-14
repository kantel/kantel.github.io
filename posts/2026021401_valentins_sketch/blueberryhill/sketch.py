from proceso import Sketch
from random import choice, uniform

WIDTH, HEIGHT = 800, 320
START_X, START_Y = 470, 75

p5 = Sketch()

def preload():
    global bg
    bg = p5.load_image("assets/hills.jpg")  # Load the image

hearts = []
heartp = ["🩷", "❤️", "🧡", "💛", "💚", "🩵", "💙",
          "💜", "🖤", "🩶", "🤍", "🤎", "💔", "❤️‍🔥",
          "❤️‍🩹", "❣️", "💕", "💞", "💓", "💗", "💖",
          "💘", "💝"];

def setup():
    p5.create_canvas(WIDTH, HEIGHT)    
   
def draw():
    p5.image(bg, 0, 0)
    if (p5.frame_count % 2 == 0):
        heart = Heart(START_X, START_Y)
        hearts.append(heart)
    for heart in reversed(hearts):
        if heart.done:
            hearts.remove(heart)
    for heart in hearts:
        heart.update()
        heart.display()
    


p5.run_sketch(preload=preload, setup=setup, draw=draw)
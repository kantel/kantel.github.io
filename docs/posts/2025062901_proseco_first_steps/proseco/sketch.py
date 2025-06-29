from proceso import Sketch
from random import randint

p5 = Sketch()

def setup():
    p5.create_canvas(640, 400)
    p5.background(49, 197, 244)
    p5.fill(146, 82, 161)
    p5.rect(40, 40, p5.width - 80, p5.height - 80)
    p5.fill(randint(30, 220), randint(30, 220), randint(30, 220), 100)


def draw():
    p5.circle(p5.mouse_x, p5.mouse_y, 20)

def mouse_clicked():
    p5.fill(randint(30, 220), randint(30, 220), randint(30, 220), 100)

p5.run_sketch(setup=setup, draw=draw, mouse_clicked=mouse_clicked)
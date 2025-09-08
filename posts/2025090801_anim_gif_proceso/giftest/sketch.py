from proceso import Sketch
from random import randint

WIDTH, HEIGHT = 640, 338
DUCK_W, DUCK_H = 80, 78
START_X, START_Y = 10, 50
BOTTOM = 200

p5 = Sketch()

def preload():
    global bg, duck_r, duck_l
    bg = p5.load_image("data/duckhunt-bg.png")  # Load the images
    duck_r = p5.load_image("data/duck-right.gif")
    duck_l = p5.load_image("data/duck-left.gif")

ducks = []

def setup():
    p5.create_canvas(WIDTH, HEIGHT)
    reset()

def reset():
    ducks.append(Duck(randint(10, p5.width/2), randint(10, BOTTOM), "right"))
    ducks.append(Duck(randint(p5.width/2, p5.width - DUCK_W), randint(10, BOTTOM), "left"))
    
def draw():
    p5.image(bg, 0, 0)
    for duck in ducks:
        duck.update()
        duck.display()

def mouse_clicked():
    ducks.clear()
    reset()
    
class Duck():

    def __init__(self, _x, _y, _dir):
        self.pos = p5.Vector(_x, _y)
        self.vel = p5.Vector(randint(3, 5), randint(-2, 2))
        if _dir == "left":
            self.img = duck_l
            self.vel.x *= -1
        else:
            self.img = duck_r

    def update(self):
        self.pos += self.vel
        self.check_borders()

    def check_borders(self):
        if self.pos.x >= p5.width - DUCK_W:
            self.vel.x *= -1
            self.img = duck_l
        if self.pos.x <= 0:
            self.vel.x *= -1
            self.img = duck_r
        if self.pos.y <= 0 or self.pos.y >= BOTTOM:
            self.vel.y *= -1

    def display(self):
        p5.image(self.img, self.pos.x, self.pos.y, DUCK_W, DUCK_H)
        
p5.run_sketch(preload=preload, setup=setup, draw=draw, mouse_clicked=mouse_clicked)
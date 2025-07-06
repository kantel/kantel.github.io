from proceso import Sketch
from random import uniform, randint, choice

p5 = Sketch()

WIDTH, HEIGHT = (640, 400)
FPS = 5
NO_SHEEPS = 20
PATCH_SIZE = 10

# Farben
WHITE  = p5.color(255, 255, 255)
BLACK  = p5.color(0, 0, 0)
BROWN  = p5.color(248, 158, 80)
GREEN  = p5.color(98, 199, 119)
YELLOW = p5.color(248, 239, 34)
PURPLE = p5.color(148, 103, 189)
RED = p5.color(250, 25, 25)
color_list = [WHITE, RED, YELLOW, PURPLE]

class Sheep:

    def __init__(self, _x, _y, _col):
        self.x = _x
        self.y = _y
        self.col = _col
        self.size = 10
        self.energy = 20

    def update(self):
        move = 10
        rows_of_grass = p5.height//PATCH_SIZE
        self.energy -= 1
        if self.energy <= 0:
            sheeps.remove(self)
        if self.energy >= 50:
            self.energy -= 30   # Giving birth takes energy
            # Add another sheep to the list
            sheeps.append(Sheep(self.x, self.y, self.col))
        self.x += uniform(-move, move)
        self.y += uniform(-move, move)
        self.check_border()
        x_scale = int(self.x/PATCH_SIZE)
        y_scale = int(self.y/PATCH_SIZE)
        grass = lawn[x_scale*rows_of_grass + y_scale]
        if not grass.eaten:
            self.energy += grass.energy
            grass.eaten = True

    def check_border(self):
        if self.x >= p5.width - 2*self.size:
            self.x = p5.width - 2*self.size
        if self.y >= p5.height - 2*self.size:
            self.y = p5.height - 2*self.size
        if self.x <= self.size:
            self.x = self.size
        if self.y <= self.size:
            self.y = self.size
    
    def draw(self):
        p5.stroke_weight(1)
        p5.stroke(BLACK)
        p5.fill(self.col)
        p5.circle(self.x, self.y, self.size)

class Grass:

    def __init__(self, _x, _y, _size):
        self.x = _x
        self.y = _y
        self.energy = 5      # Energy from eating this patch
        self.eaten = False   # Hasn't been eaten yet
        self.size = _size
    
    def draw(self):
        p5.no_stroke()
        if self.eaten:
            if uniform(0, 100) < .5:
                self.eaten = False
            else:
                p5.fill(BROWN)
        else:
            p5.fill(GREEN)
        p5.rect(self.x, self.y, self.size, self.size)

sheeps = []
lawn = []

def setup():
    p5.create_canvas(WIDTH, HEIGHT)
    # Create the sheeps
    for _ in range(NO_SHEEPS):
        sheeps.append(Sheep(randint(20, p5.width - 20),
                            randint(20, p5.height - 20),
                            choice(color_list)))
    # Create the grass
    for x in range(0, p5.width, PATCH_SIZE):
        for y in range(0, p5.height, PATCH_SIZE):
            lawn.append(Grass(x, y, PATCH_SIZE))
    p5.frame_rate(FPS)

def draw():
    p5.background(GREEN)
    # Update the grass first
    for grass in lawn:
        grass.draw()
    # then the sheeps    
    for sheep in sheeps:
        sheep.update()
        sheep.draw()

p5.run_sketch(setup=setup, draw=draw)
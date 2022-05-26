const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      password: '123456',
      name: 'Alice',
    },
  })

  const bob = await prisma.Category.upsert({
    where: { name: 'Rise' },
    update: {},
    create: {
      name: 'Rise',
      Recipes: {
        create: [
          {
            name: 'Crock Pot Roast',
            steps: `"Place beef roast in crock pot.",
            "Mix the dried mixes together in a bowl and sprinkle over the roast.",
            "Pour the water around the roast.",
            "Cook on low for 7-9 hours."`,
            timers: '420s',
            imageURL: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg',
            Ingredients:{
              create:[
                {
                  quantity: "1",
                  name: " beef roast",
                  type: "Meat"
                },
                {
                    quantity: "1 package",
                    name: "brown gravy mix",
                    type: "Baking"
                },
                {
                    quantity: "1 package",
                    name: "dried Italian salad dressing mix",
                    type: "Condiments"
                },
                {
                    quantity: "1 package",
                    name: "dry ranch dressing mix",
                    type: "Condiments"
                },
                {
                    quantity: "1/2 cup",
                    name: "water",
                    type: "Drinks"
                }
              ]
            }
          },
          {
            name: 'Curried Lentils and Rice',
            steps: `"Bring broth to a low boil.",
            "Add curry powder and salt.",
            "Cook lentils for 20 minutes.",
            "Add rice and simmer for 20 minutes.",
            "Enjoy!"`,
            timers: '30m',
            imageURL: 'http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg',
            Ingredients:{
              create:[
                {
                  "quantity": "1 quart",
                  "name": "beef broth",
                  "type": "Misc"
                },
                {
                    "quantity": "1 cup",
                    "name": "dried green lentils",
                    "type": "Misc"
                },
                {
                    "quantity": "1/2 cup",
                    "name": "basmati rice",
                    "type": "Misc"
                },
                {
                    "quantity": "1 tsp",
                    "name": "curry powder",
                    "type": "Condiments"
                },
                {
                    "quantity": "1 tsp",
                    "name": "salt",
                    "type": "Condiments"
                }
              ]
            }
          },
        ],
      },
    },
  })
  const bob1 = await prisma.Category.upsert({
    where: { name: 'Vegetable' },
    update: {},
    create: {
      name: 'Vegetable',
      Recipes: {
        create: [
          {
            name: 'Roasted Asparagus',
            steps: `"Preheat oven to 425°F.",
            "Cut off the woody bottom part of the asparagus spears and discard.",
            "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).",
            "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
            "Sprinkle with salt.",
            "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
            "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
            "They should be tender when pierced with the tip of a knife.",
            "The tips of the spears will get very brown but watch them to prevent burning.",
            "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."`,
            timers: '15m',
            imageURL: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg',
            Ingredients:{
              create:[
                {
                  "quantity": "1 lb",
                  "name": " asparagus",
                  "type": "Produce"
                },
                {
                    "quantity": "1 1/2 tbsp",
                    "name": "olive oil",
                    "type": "Condiments"
                },
                {
                    "quantity": "1/2 tsp",
                    "name": "kosher salt",
                    "type": "Baking"
                }
              ]
            }
          }
        ],
      },
    },
  })
  const bob2 = await prisma.Category.upsert({
    where: { name: 'Pizza' },
    update: {},
    create: {
      name: 'Pizza',
      Recipes: {
        create: [
          {
            name: 'Roasted Asparagus',
            steps: `"Add hot water to yeast in a large bowl and let sit for 15 minutes.",
            "Mix in oil, sugar, salt, and flour and let sit for 1 hour.",
            "Knead the dough and spread onto a pan.",
            "Spread pizza sauce and sprinkle cheese.",
            "Add any optional toppings as you wish.",
            "Bake at 400 deg Fahrenheit for 15 minutes.",
            "Enjoy!"`,
            timers: '15m',
            imageURL: 'http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg',
            Ingredients:{
              create:[
                {
                  "quantity": "5 teaspoons",
                  "name": "yeast",
                  "type": "Baking"
                },
                {
                    "quantity": "5 cups",
                    "name": "flour",
                    "type": "Baking"
                },
                {
                    "quantity": "4 tablespoons",
                    "name": "vegetable oil",
                    "type": "Baking"
                },
                {
                    "quantity": "2 tablespoons",
                    "name": "sugar",
                    "type": "Baking"
                },
                {
                    "quantity": "2 teaspoons",
                    "name": "salt",
                    "type": "Baking"
                },
                {
                    "quantity": "2 cups",
                    "name": "hot water",
                    "type": "Misc"
                },
                {
                    "quantity": "1/4 cup",
                    "name": "pizza sauce",
                    "type": "Misc"
                },
                {
                    "quantity": "3/4 cup",
                    "name": "mozzarella cheese",
                    "type": "Dairy"
                }
              ]
            }
          }
        ],
      },
    },
  })
  console.log({ alice, bob, bob1, bob2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
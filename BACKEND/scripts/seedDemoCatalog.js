require("dotenv").config();

const sequelize = require("../utils/database");
const MainCategory = require("../models/mainCategory");
const SubCategory = require("../models/subCategory");
const Product = require("../models/product");
const ProductType = require("../models/productType");

require("../relations/relations")();

// Demo-safe image URLs. These are intentionally not copied from quick-commerce
// competitors, so the seeded catalog can be used in a public resume project.
const catalog = [
  {
    name: "Fresh Produce",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&h=700&q=90",
    subcategories: [
      {
        name: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Tomato Local",
            description:
              "Firm, juicy tomatoes for curries, salads, sandwiches, and everyday cooking.",
            images: [
              "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&h=700&q=90",
              "https://images.unsplash.com/photo-1576856497337-4f2be24683da?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "500 g", price: 28, discount: 8, stock: 35 },
              { name: "1 kg", price: 52, discount: 12, stock: 20 },
            ],
          },
          {
            name: "Potato",
            description:
              "All-purpose potatoes with a clean, earthy taste for fries, curries, and snacks.",
            images: [
              "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "1 kg", price: 38, discount: 5, stock: 45 },
              { name: "2 kg", price: 72, discount: 10, stock: 30 },
            ],
          },
          {
            name: "Onion",
            description:
              "Kitchen staple onions with balanced sharpness for gravies, stir fries, and salads.",
            images: [
              "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "1 kg", price: 42, discount: 0, stock: 40 },
              { name: "2 kg", price: 80, discount: 7, stock: 24 },
            ],
          },
          {
            name: "Coriander Bunch",
            description:
              "Fresh coriander leaves for chutneys, garnishing, marinades, and bright herb flavor.",
            images: [
              "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "1 bunch", price: 15, discount: 0, stock: 50 }],
          },
        ],
      },
      {
        name: "Fruits",
        image:
          "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Banana Robusta",
            description:
              "Naturally sweet bananas that work well for breakfast, smoothies, and quick snacks.",
            images: [
              "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "6 pcs", price: 45, discount: 10, stock: 32 },
              { name: "12 pcs", price: 85, discount: 14, stock: 18 },
            ],
          },
          {
            name: "Apple Royal Gala",
            description:
              "Crisp red apples with a mild sweetness, ideal for lunch boxes and fruit bowls.",
            images: [
              "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "4 pcs", price: 145, discount: 12, stock: 16 },
              { name: "1 kg", price: 245, discount: 18, stock: 12 },
            ],
          },
          {
            name: "Orange",
            description:
              "Refreshing citrus fruit with bright flavor for juicing, snacking, and salads.",
            images: [
              "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "1 kg", price: 110, discount: 9, stock: 22 }],
          },
        ],
      },
    ],
  },
  {
    name: "Dairy, Bread & Eggs",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&h=700&q=90",
    subcategories: [
      {
        name: "Milk & Curd",
        image:
          "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Toned Milk",
            description:
              "Fresh toned milk for tea, coffee, cereal, desserts, and everyday family use.",
            images: [
              "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "500 ml", price: 29, discount: 0, stock: 40 },
              { name: "1 L", price: 56, discount: 0, stock: 28 },
            ],
          },
          {
            name: "Plain Curd",
            description:
              "Smooth plain curd for meals, raita, marinades, smoothies, and cooling sides.",
            images: [
              "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "400 g", price: 45, discount: 5, stock: 24 },
              { name: "1 kg", price: 98, discount: 8, stock: 15 },
            ],
          },
        ],
      },
      {
        name: "Bread & Eggs",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Whole Wheat Bread",
            description:
              "Soft whole wheat bread slices for toast, sandwiches, and quick breakfast plates.",
            images: [
              "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "400 g", price: 55, discount: 6, stock: 20 }],
          },
          {
            name: "Farm Fresh Eggs",
            description:
              "Protein-rich eggs for omelettes, baking, breakfast bowls, and everyday cooking.",
            images: [
              "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "6 pcs", price: 60, discount: 0, stock: 32 },
              { name: "12 pcs", price: 112, discount: 7, stock: 18 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Snacks & Beverages",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=700&h=700&q=90",
    subcategories: [
      {
        name: "Chips & Namkeen",
        image:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Classic Salted Chips",
            description:
              "Crispy potato chips with a clean salted flavor for movie nights and snack breaks.",
            images: [
              "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "52 g", price: 20, discount: 0, stock: 70 },
              { name: "150 g", price: 55, discount: 8, stock: 35 },
            ],
          },
          {
            name: "Masala Namkeen Mix",
            description:
              "Crunchy spiced snack mix with peanuts, sev, and lentil crisps for tea-time.",
            images: [
              "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "200 g", price: 65, discount: 10, stock: 25 }],
          },
        ],
      },
      {
        name: "Cold Drinks",
        image:
          "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Lemon Fizz",
            description:
              "Chilled lemon soda with a bright, fizzy taste for quick refreshment.",
            images: [
              "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "250 ml", price: 35, discount: 0, stock: 36 },
              { name: "750 ml", price: 85, discount: 11, stock: 20 },
            ],
          },
          {
            name: "Tender Coconut Water",
            description:
              "Naturally hydrating coconut water with a light sweetness and no heavy aftertaste.",
            images: [
              "https://images.unsplash.com/photo-1609291204974-8d4f2a757f05?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "200 ml", price: 55, discount: 5, stock: 28 }],
          },
        ],
      },
    ],
  },
  {
    name: "Kitchen Staples",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&h=700&q=90",
    subcategories: [
      {
        name: "Rice, Atta & Dal",
        image:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Basmati Rice",
            description:
              "Long-grain basmati rice with a pleasant aroma for biryani, pulao, and daily meals.",
            images: [
              "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "1 kg", price: 145, discount: 10, stock: 25 },
              { name: "5 kg", price: 650, discount: 15, stock: 10 },
            ],
          },
          {
            name: "Whole Wheat Atta",
            description:
              "Fine whole wheat flour for soft rotis, parathas, pooris, and home baking.",
            images: [
              "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "1 kg", price: 58, discount: 0, stock: 30 },
              { name: "5 kg", price: 265, discount: 9, stock: 16 },
            ],
          },
          {
            name: "Toor Dal",
            description:
              "Protein-rich split pigeon peas for dal tadka, sambar, khichdi, and comfort meals.",
            images: [
              "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "1 kg", price: 155, discount: 6, stock: 18 }],
          },
        ],
      },
      {
        name: "Spices & Masala",
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Turmeric Powder",
            description:
              "Bright turmeric powder for color, aroma, and everyday Indian cooking.",
            images: [
              "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "100 g", price: 42, discount: 0, stock: 35 }],
          },
          {
            name: "Garam Masala",
            description:
              "Aromatic spice blend that adds warmth and depth to curries, snacks, and gravies.",
            images: [
              "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "100 g", price: 78, discount: 8, stock: 24 }],
          },
        ],
      },
    ],
  },
  {
    name: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&h=700&q=90",
    subcategories: [
      {
        name: "Bath & Body",
        image:
          "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&h=700&q=90",
        products: [
          {
            name: "Aloe Vera Body Wash",
            description:
              "Gentle daily body wash with a fresh feel and soft lather for morning showers.",
            images: [
              "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [{ name: "250 ml", price: 149, discount: 12, stock: 18 }],
          },
          {
            name: "Moisturising Soap Bar",
            description:
              "Creamy bathing soap bar for a clean rinse and a mild, comfortable skin feel.",
            images: [
              "https://images.unsplash.com/photo-1607006483224-31c1f9a8d1a6?auto=format&fit=crop&w=700&h=700&q=90",
            ],
            types: [
              { name: "75 g", price: 38, discount: 0, stock: 40 },
              { name: "Pack of 4", price: 145, discount: 10, stock: 22 },
            ],
          },
        ],
      },
    ],
  },
];

const findOrCreateByName = async (model, payload, extraWhere = {}) => {
  const [record, created] = await model.findOrCreate({
    where: { name: payload.name, ...extraWhere },
    defaults: payload,
  });

  if (!created) {
    await record.update(payload);
  }

  return record;
};

const seed = async () => {
  await sequelize.authenticate();
  await sequelize.sync();

  let productCount = 0;
  let variantCount = 0;

  for (const categoryData of catalog) {
    const category = await findOrCreateByName(MainCategory, {
      name: categoryData.name,
      image: categoryData.image,
    });

    for (const subcategoryData of categoryData.subcategories) {
      const subcategory = await findOrCreateByName(
        SubCategory,
        {
          name: subcategoryData.name,
          image: subcategoryData.image,
          category: category.id,
        },
        { category: category.id }
      );

      for (const productData of subcategoryData.products) {
        const product = await findOrCreateByName(
          Product,
          {
            name: productData.name,
            description: productData.description,
            images: JSON.stringify(productData.images),
            category: category.id,
            subcategory: subcategory.id,
          },
          { category: category.id, subcategory: subcategory.id }
        );

        productCount += 1;

        for (const typeData of productData.types) {
          await findOrCreateByName(
            ProductType,
            {
              ...typeData,
              productId: product.id,
            },
            { productId: product.id }
          );
          variantCount += 1;
        }
      }
    }
  }

  console.log(
    `Seeded ${catalog.length} categories, ${productCount} products, and ${variantCount} variants.`
  );
};

seed()
  .then(() => sequelize.close())
  .catch(async (error) => {
    console.error(error);
    await sequelize.close();
    process.exit(1);
  });

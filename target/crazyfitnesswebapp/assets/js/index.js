const admin_email = JSON.parse(localStorage.getItem("details"));



// For music card
const musicCard = [

  {
    id: "11",
    alt: "music image",
    image: "../assets/images/MUSIC/ethir_neechal.jpg",
    name: "ETHIR NEECHAL",
    url: "../assets/audio/Ethir-Neechal.mp3"

  },
  {
    id: "12",
    alt: "gilli image",
    image: "../assets/images/MUSIC/gilli.jpg",
    name: "ARJUNAR-VILLU",
    url: "../assets/audio/Arjunar-Villu.mp3"
  },
  {
    id: "13",
    alt: "beast_music",
    image: "../assets/images/MUSIC/beast.jpg",
    name: "BEAST-MODE",
    url: "../assets/audio/Beast-Mode-MassTamilan.so.mp3"
  },
  {
    id: "14",
    alt: "blood bath image",
    image: "../assets/images/MUSIC/asuran.jpg",
    name: "BLOOD-BATH",
    url: " ../assets/audio/Blood Bath-Masstamilan.in.mp3"
  },
  {
    id: "15",
    alt: "ps image",
    image: "../assets/images/MUSIC/ponniyin_selvan.jpg",
    name: "CHOLA CHOLA",
    url: "../assets/audio/Chola-Chola-MassTamilan.dev.mp3"
  },
  {
    id: "16",
    alt: "k.g.f image",
    image: "../assets/images/MUSIC/k.g.f.jpg",
    name: "DHEERA DHEERA",
    url: "../assets/audio/Dheera-Dheera-MassTamilan.org.mp3"
  },
  {
    id: "17",
    alt: "biriyani image",
    image: "../assets/images/MUSIC/biriyani.jpg",
    name: "EDHIRTHU NIL",
    url: "../assets/audio/Edhirthu-Nil.mp3"
  },
  {
    id: "18",
    alt: "ATM image",
    image: "../assets/images/MUSIC/alagiya_tamil_magan.jpg",
    name: "ELLAAPUGALUM",
    url: "../assets/audio/Ellaappugazhum.mp3"
  },
  {
    id: "19",
    alt: "sarpatta image",
    image: "../assets/images/MUSIC/sarpatta.jpg",
    name: "NEEYE OLI",
    url: "../assets/audio/Neeye-Oli-MassTamilan.fm.mp3"
  },
  {
    id: "110",
    alt: "vikram image",
    image: "../assets/images/MUSIC/vikram.jpg",
    name: "ONCE UPON A TIME",
    url: "../assets/audio/Once-Upon-a-Time-MassTamilan.so.mp3"
  },
  {
    id: "120",
    alt: "mahaan image",
    image: "../assets/images/MUSIC/mahaan.jpg",
    name: "NAAN NAAN",
    url: "../assets/audio/Naan-Naan-MassTamilan.fm.mp3"
  }

];
// set the array into LS
localStorage.setItem("musicCard", JSON.stringify(musicCard))

//   For equipment
const array = [

  {
    id: "21",
    about: "Perfect your fitness regimes with Amazon Basics Wall Mounted Pull Up Bar. It features a durable structure that allows stability and is much safer to use. Coming with soft cushions, it provides a comfortable and painless experience. Suitable for both indoors and outdoors, this pull-up bar can be used to strengthen the entire upper body and abs.",
    alt: "Pull Up Bar image",
    image: ".././assets/images/PULLUP-BAR.png",
    name: "Pull Up Bar",
    price: "₹1999",
  },

  {
    id: "22",
    about: "Set of 2 PVC hex dumbbells for resistance training; each dumbbell weighs 1 kg *2 total 2kg weight. Ideal for fitness classes or at-home workout routines Easy to store as they do not occupy a lot of space. Easy grip and anti slip. These durable hand weights are the perfect addition to aerobics and step workouts, as well as any standard strength training with weights for added intensity and resistance",
    alt: "dumbbells image",
    image: "./../assets/images/dumbbells.jpg",
    name: "Dumb Bells",
    price: "₹999"
  },

  {
    id: "23",
    about: "Heavy-duty gauge steel is constructed to ensure the weight bench’s durability and stability. The whole bench is covered with black powder coating to prevent chipping, rust and corrosion under workout conditions. Bear in mind that the users need comfort during rigorous exercises, we design it with water proof leather finish, thick foam padding inside so the users can do more reps with no interventions.Home gym bench has solid mechanics design. The wide base enlarges the bearing capacity area and the base cap is anti-skid to prevent any movement during the exercise. It is incredible stability to promise true safety and avoid any wobble",
    alt: "incline bench press image",
    image: "./../assets/images/INCLINE_BENCH_PRESS.jpg",
    name: "Incline Bench Press",
    price: "₹27999"
  },

  {
    id: "24",
    about: "The pulley rotate 360-degree prevents the rope from twisting,Simple installation, smooth roller to ensure the operation of nylon rope. Flexible sliding pulley with heavy load capacity for numerous application,Loading 200kg,Different compound pushing exercises with pulley system help you make perfact body. Designed with large rubber blocks at the end of the rope to increase effectiveness in use & prevent slipping or sliding while practicing.",
    alt: "cables and pulleys image",
    image: ".././assets/images/CABLES-AND-PULLEYS.png",
    name: "Cables and Pulleys",
    price: "₹3499"
  },

  {
    id: "25",
    about: "Perfect your fitness regimes with Amazon Basics Wall Mounted Pull Up Bar. It features a durable structure that allows stability and is much safer to use. Coming with soft cushions, it provides a comfortable and painless experience. Suitable for both indoors and outdoors, this pull-up bar can be used to strengthen the entire upper body and abs.",
    alt: "Pull Up Bar image",
    image: ".././assets/images/PULLUP-BAR.png",
    name: "Pull Up Bar",
    price: "₹1999"
  },
  {
    id: "26",
    about: "The rubber-coated constructions of this Fixed Barbell lends adequate toughness for long-term use. Fixed Barbell are the best choice for sets that involve switching between exercises quickly, as you can place them down and pick them up within minutes without misplacing them.Made from high grade virgin rubber for long life",
    alt: "Bar Bells image",
    image: "./../assets/images/barbells_image.jpg",
    name: "Bar Bells",
    price: "₹4999"
  },
  {
    id: "27",
    about: "Lifeline Multi Bench LB 305 is made up using a heavy duty CRC Steel Tube Frame of 2 inches. It is technically designed with a unique triangular structure which provides durability and stability. The frame of the bench is powder coated making the bench long-lasting and non-corrosive (rust-free). Maximum Weight Capacity of 400lbs.Multi Bench additionally features Leg Curl, Leg Extension & Dipping. It is designed with different back rest positions including Incline, Flat and Decline levels to meet all your workout needs. Ideal for beginner, intermediate and advanced level workouts.The cushioned seat has a sweat proof padding inside for you to exercise comfortably and safely. Foam rollers help in securing your ankles and legs & provides a cushioning effect.The rubber foot caps present on the base on the bench protect the flooring from being damaged & provides stability to the product, keeping it in position",
    alt: "leg machine image",
    image: ".././assets/images/LEG-EXTENSION-MACHINE.png",
    name: "Leg Machine",
    price: "₹9999"
  },
];
localStorage.setItem("card", JSON.stringify(array));

// For top-outfit
const top_outfit = [
  // index = 0
  {
    id: "31",
    about: "Designed for an athletic fit, the polyester shirt is designed to hug your upper torso and allow for room in the mid-section, giving an overall easy fit. Just fitted enough to show off your figure, but not enough to restrict your motion.Our men's gym clothes are made with 100% polyester space dye for a soft, lightweight, and durable finish.Care Instructions: Please follow the wash care instructions as given on the label",
    image: "../assets/images/top_outfit.jpg",
    name: "T-shirt",
    alt: "top outfit image",
    price: "₹599",
    section: "top"

  },
  // index = 1
  {
    id: "32",
    about: "Fit Type: Regular Fit. Cotton-Rich Material: This easy-to-maintain and breathable T-shirt in a cotton-rich blend is an ideal choice for warmer days.Tag-Free Comfort: This underwear for men is designed without any itchy tags for a smooth and pleasant experience. This ensures there is no irritation, skin abrasion, or rubbing.",
    image: "./../assets/images/white_t-shirt.jpg",
    name: "White T-shirt",
    alt: "top outfit white t-shirt image",
    price: "  ₹499",
    section: "top"

  },

  // index = 2
  {
    id: "33",
    about: "Fit Type: Slim Fit. We are presenting a 100% polyester knitted t-shirt especially for active boys that keeps you dry even after heavy exercise.Breathable instadry fabric keeps you dry & energetic all day long.Fabric doesn’t loose its shape & colour even after 1000 washes.",
    image: "./../assets/images/Sleeve_less.jpg",
    name: "Sleeve less T-shirt",
    alt: "top outfit sleeve less t-shirt image",
    price: "  ₹399",
    section: "top"

  },
  // index = 3
  {
    id: "34",
    about: "Fit Type: Regular Fit.Engineered with Dynamic Dry Technology , this tshirt is stretchable, light weigth and super smooth, wick moisture quickly and keeps you dry.Athletic Fit. Super Flexible.Regular Fit Allowing Comfortable Arm Movement During Your Workouts.",
    image: "./../assets/images/blue_t-shirt.jpg",
    name: "Blue T-shirt",
    alt: "top outfit blue t-shirt image",
    price: " ₹499",
    section: "top"

  },
  // index = 4
  {
    id: "35",
    about: "Fit Type: Regular Fit.These tank tops are fabricated with 100% DryFit Polyester which gives allowance to wear in every season.It has antimicrobial and sweat-wicking technology.It is perfect for gym, jogging, running, yoga, athletic, cycling, stretching, gymnastics, work-out and for games like basketball, badminton etc.",
    image: "./../assets/images/blue_sleeve_less.jpg ",
    name: "Blue Sleeveless",
    alt: "top outfit blue sleeveless image",
    price: "₹399",
    section: "top"
  },
  // index = 5
  {
    id: "36",
    about: "Fit Type: Regular Fit.Minimal Shrinkage.Colours may slightly vary depending on your screen brightness.Specifications may vary by+/-10%.Machine Wash.Wash in Cold water,use mild detergent,dry in shade.    ",
    image: "./../assets/images/black_t-shirt.jpg",
    name: "Black T-shirt",
    alt: "top outfit black t-shirt image",
    price: "₹799",
    section: "top"
  },

  // For bottom
  // index = 0
  {
    id: "41",
    about: "Fit Type: Slim Fit.Made from 100% Premium Cotton. All Melanges are made with Cotton Rich Fabric.These Slim fit Tracks have a comfortable ankle grip for a superior leg hold. Contrast draw cord in inner elastic band makes the garment super stylish .",
    image: "../assets/images/bottom_outfit.jpg",
    name: "Track Pant",
    alt: "bottom outfit image",
    price: "₹799",
    section: "bottom"

  },
  // index = 1
  {
    id: "42",
    about: "Fit Type: Slim Fit. Polycotton ;Pre-washed Cotton Jogger Fabric to impart a softer texture to provide comfort with strength.Style: Designed for comfort and great for all year round use.:Side tape joggers with zipper pocket.Slim fit Cotton joggers for men, with the drawstring feature, that makes these mens joggers, casual to wear and easily adjustable to your waist according to desired comfort",
    image: "./../assets/images/grey_pant.jpg",
    name: "Grey Track Pant",
    alt: "bottom outfit gray pant image",
    price: "₹899",
    section: "bottom"

  },
  // index = 2
  {
    id: "43",
    about: "Fit Type: Relaxed.Comfortable bottowear, Smart Casual look, Season Essential.After perfecting the shirts category, Dennis Lingo brings to you solid cotton casual trousers. It is an ankle-length chino slim fit and mid-rise. It assures a soft and smooth touch against the skin. Apart from being a perfect addition to your casual wardrobe, it pairs with a formal look brilliantly.",
    image: "./../assets/images/Grey_formal_lower.jpg",
    name: "Gray normal Pant",
    alt: "bottom outfit grey normal image",
    price: "₹899",
    section: "bottom"

  },
  // index = 3
  {
    id: "44",
    about: "Fit Type: Regular Fit.Ultra-Light Fabric Featuring 100% durable soft cotton, it’s a Breeeze to step into the ultra-light boxer shorts. It’s so light, even tedious tasks will fly by!No pockets, no party What’s the fun without pockets? These printed boxer shorts come equipped with dual pockets for all that fun stuff! Early morning walk in your boxers? You know where to put your house keys and wallet.",
    image: "./../assets/images/black_shorts.jpg",
    name: "Black Boxer Shorts",
    alt: "bottom outfit image",
    price: "₹599",
    section: "bottom"

  },
  // index = 4
  {
    id: "45",
    about: "Fit Type: Slim.No harmful chemicals are used in manufacturing our dyes. We ensure that our colors don't run off and are tested rigorously. Getting it done from India's top quality dyeing unit, our colors look good and stay the same for a long time. When you wish to move away from the classic, we have a wide range of designs that are in style, for the seasons to come. We abide by what we believe in, our products are known for its quality, durability, styling, unique representation and lot more.",
    image: "./../assets/images/stylish_pant.jpg",
    name: "Stylish Pant",
    alt: "bottom outfit stylish pant image",
    price: " ₹1399",
    section: "bottom"

  },
  // index = 5
  {
    id: "46",
    about: "Fit Type: Regular Fit.Fabric: Cotton Blend.Soft and Strechable Fabric.Elastic Waist with Side Pockets",
    image: "./../assets/images/normal_black_pant.jpg",
    name: "Normal Track Pant",
    alt: "bottom outfit black pant image",
    price: " ₹999",
    section: "bottom"

  },
  //   shoe card
  //   index 0 
  {
    id: "51",
    about: "100% Hiqh grade Micro Polyester fibre which is flexible during gym, workout, exercise or any other sports or outdoor activity.This fabric is soft,Dry Fast and Breathable which keeps moisture away from your body thus keeps you cool and dry.This Sports Apparel/Shorts Can be used for all kinds of sports like Running, Cricket, Football, Yoga, Hockey, Badminton, Swimming, Basketball, Athletics , Tennis, Squash, Volleyball, Baseball, Gym, Exercise & Fitness, Camping & Hiking, Cycling, Rugby or any Indoor/Outdoor Activity",
    image: "../assets/images/shoe_image.jpg",
    name: "Sports Shoes",
    alt: "shoe  image",
    price: "  ₹899",
    section: "shoe"

  },
  // index = 1
  {
    id: "52",
    about: "Fit Type: Regular.solid , trendy design , trendy look and optimal flaxibility.Premium Quality , Light Weight , 100% Genuine Product , Avialable at Affordable Price , Comfortable & Durable white Shoes , Comfortable Material Use , Feel Free To Buy.",
    image: "./../assets/images/white_woakers.jpg",
    name: "White Woakers",
    alt: "white woakers image",
    price: " ₹1599",
    section: "shoe"

  },
  // index = 2
  {
    id: "53",
    about: "Fit Type: Regular.Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoes bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner",
    image: "./../assets/images/black_shoes.jpg",
    name: "Black Woakers",
    alt: " black shoe  image",
    price: "₹799",
    section: "shoe"

  },
  // index = 3
  {
    id: "54",
    about: "Fit Type: Regular.Rotate Your Pair Of Shoes Once Every Other Day, Allowing Them To De-Odorize And Retain Their Shapes.Use Shoe Bags To Prevent Any Stains Or Mildew.Dust Any Dry Dirt From The Surface Using A Clean Cloth. Do Not Use Polish Or Shiner.",
    image: "./../assets/images/grey_shoes.jpg",
    name: "Grey Sports Shoes",
    alt: "shoe  image",
    price: "₹899",
    section: "shoe"

  },
  // index = 4
  {
    id: "55",
    about: "Fit Type: Regular.The rubber outsoles are abrasion tested and provide a soft, plush feel and long term protection against wear and tear. The shoe is made of materials that will endure all challenges like unsteady terrain, a person’s weight, and all possible pressures that occur during training, walking, or running.This excellent design results in smoother and more dynamic forefoot transition in the long run. It is designed for multi-environment usage and is suitable for all kinds of activities like gym, Indoor fitness sessions, jogging, walking, everyday running, training and many other sporting activities.",
    image: "./../assets/images/blue_running_shoes.jpg",
    name: "Running Shoes",
    alt: "running shoe image",
    price: "₹799",
    section: "shoe"

  },
  // index = 5
  {
    id: "56",
    about: "Fit Type: Regular.The next generation of comfortable running shoes for men. 100% synthetic sole will provide greater durability. We have redefined style and performance to bring you an athletic workout shoe and casual walking sneaker in one. Each step will have you walking high on the clouds!Allow Your Pair Of Footwear To Air And De-Odorize At Regular Basis; Use Shoe Bags To Prevent Any Stains Or Mildew; Dust Any Dry Dirt From The Surface Using A Clean Cloth.",
    image: "./../assets/images/orange_running_shoes.jpg",
    name: "Casual Shoes",
    alt: "casual shoe image",
    price: "₹699",
    section: "shoe"

  },


];
localStorage.setItem("top_card", JSON.stringify(top_outfit));

const exercise = [
  //  full body exercise
  // exercise = 1
  {
    id: "100",
    name: "Push up",
    image: "../assets/images/GIF/Full_body_GIFs/pushup.gif",
    alt: "pushup.gif",
    time: "x 20",
    steps: "Go to any slanting surface and ready with your position now give  full strength to your hands. benefits are it will increase your biceps,chest,shoulder.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 2
  {
    id: "101",
    name: "Pull up",
    image: "../assets/images/GIF/Full_body_GIFs/Pull_ups.gif",
    alt: "pull up.gif",
    time: "x 15",
    steps: "Go to any high bar and ready with your position now give full strength to your hands benefits are it will increase your biceps,triceps,shoulder.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 3
  {
    id: "102",
    name: "Jumping Jacks",
    image: "../assets/images/GIF/Full_body_GIFs/jumping_jack.gif",
    alt: "jumping jack.gif",
    time: "x 00:20s",
    steps: "Start with your feet together and your arms by your sides,then jump up with your feet apart and your hands overhead return to the start position then do the next rep",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 4
  {
    id: "103",
    name: "Incline Pushup",
    image: "../assets/images/GIF/Full_body_GIFs/Incline_pushup.gif",
    alt: "Incline push-up.gif",
    time: "x 20",
    steps: "Start in the regular push-up position but with your hands elevate on a chair or bench then push your body up down using your arm strength.Remember to keep your body straight.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 5
  {
    id: "104",
    name: "Russian Twist",
    image: "../assets/images/GIF/Full_body_GIFs/russian_twist.gif",
    alt: "russian twist.gif",
    time: "x 20",
    steps: " Sit on the floor with your knees bent,feet lifted a little bit and back tilted backwards then hold your hands together and twist from side to side",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 6
  {
    id: "105",
    name: "Pile Squats",
    image: "../assets/images/GIF/Full_body_GIFs/pile_squats_GIF.jpg",
    alt: "pile_squats_GIF.gif",
    time: "x 15",
    steps: "Stand with your hands on your hips and feet a little wider than shoulder width apart.Then lower your body until your thighs are parallel to the floor. Your knees should be extended in the same direction as your tiptoes.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 7
  {
    id: "106",
    name: "Diamond push up",
    image: "../assets/images/GIF/Full_body_GIFs/Diamond-Push-Up-Gif.gif",
    alt: "Diamond push up.gif",
    time: "x 15",
    steps: " Start in the push-up position. Make a diamond shape with your forefingers and thumbs together under your chest.Then push your body up and down. Remember to keep your body straight.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 8
  {
    id: "107",
    name: "Mountain climber",
    image: "../assets/images/GIF/Full_body_GIFs/mountain_climber.gif",
    alt: "mountain_climber.gif",
    time: "x 20",
    steps: "Start in the push-up position. Bend your right knee towards your chest and keep your left leg straight then quickly switch from one leg to the other.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 9
  {
    id: "108",
    name: "Plank",
    image: "../assets/images/GIF/Full_body_GIFs/Plank.png",
    alt: "plank image",
    time: "x 00.30s",
    steps: "Lie on the floor with your toes and forearms on the ground.Keep your body straight and hold this position as long above time mentioned. this exercise strengthens the abdomen, back and shoulders.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },
  // exercise = 10
  {
    id: "109",
    name: "Cobra stretch",
    image: "../assets/images/GIF/Full_body_GIFs/cobra_stretch.jpg",
    alt: "Cobra stretch",
    time: "x 00.30s",
    steps: " Lie down on your stomach and bend your elbows with your hands beneath your shoulders.  Then push your chest up off the ground as far as possible.Hold this position for seconds.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "fullbody",
  },

  // lower body exercise
  // exercise = 1
  {
    id: "201",
    name: "Jumping Jack",
    image: "../assets/images/GIF/Full_body_GIFs/jumping_jack.gif",
    alt: "jumping jack.gif",
    time: "x 00.20s",
    steps: "Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead return to the start position then do the next rep.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 2
  {
    id: "202",
    name: "Squat",
    image: "../assets/images/GIF/Lower_body_GIFs/squat.gif",
    alt: "Squats.gif",
    time: "x 15",
    steps: "Stand with your feet shoulder width apart and your arms stretched forward, then lower your body until your thighs are parallel with the floor.your knees should be extended in the same direction as your toes.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 3
  {
    id: "203",
    name: "Side lying leg lift left",
    image: "../assets/images/GIF/Lower_body_GIFs/side_lying_leg_lift_left.gif",
    alt: "side-lying-leg-lift-left.gif",
    time: "x 15",
    steps: "Lie down on your side with your head rested on your right arm lift your upper leg up and return to the start position make sure your left leg goes straight up and down during the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 4
  {
    id: "204",
    name: "Side lying leg lift right",
    image: "../assets/images/GIF/Lower_body_GIFs/side_lying_leg_lift_right.gif",
    alt: "side_lying_leg_lift_right.gif",
    time: "x 15",
    steps: "Lie down on your side with your head rested on your left arm lift your upper leg up and return to the start position make sure your right leg goes straight up and down during the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 5
  {
    id: "205",
    name: "Backward Lunge",
    image: "../assets/images/GIF/Lower_body_GIFs/Reverse-Lunge.gif",
    alt: "Reverse-Lunge.gif",
    time: "x 20",
    steps: "Stand with your feet shoulder width apart and your hands on your hips step a big backwards with your right leg and lower your body until your left thigh is parallel to the floor.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 6
  {
    id: "206",
    name: "Donkey kicks Right",
    image: "../assets/images/GIF/Lower_body_GIFs/Donkey_kicks_right.gif",
    alt: "Donkey_kicks_right.gif",
    time: "x 20",
    steps: "Start on all fours with your knees under butt and your hands under shoulders. Then lift your right leg and squeeze your butt as much as you can. Go back to the start position and repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 7
  {
    id: "207",
    name: "Donkey kicks Left",
    image: "../assets/images/GIF/Lower_body_GIFs/Donkey_kicks_left.gif",
    alt: "Donkey_kicks_left.gif",
    time: "x 20",
    steps: "Start on all fours with your knees under butt and your hands under shoulders. Then lift your left leg and squeeze your butt as much as you can. Go back to the start position and repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 8
  {
    id: "208",
    name: "Adductor Stretch in Standing",
    image: "../assets/images/GIF/Lower_body_GIFs/Adductor_stretch_in_standing.gif",
    alt: "Adductor Stretch in Standing.gif",
    time: "x 20",
    steps: "Stand with your feet wide distance apart and your hands rested on your hips. Then bend your left leg and lean your body to the left side. Hold the position for a few seconds, then return and repeat with the other side.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 9
  {
    id: "209",
    name: "Split Squat Left",
    image: "../assets/images/GIF/Lower_body_GIFs/Split_squat_left.gif",
    alt: "Split Squat Left.gif",
    time: "x 15",
    steps: " Take a big step forward with your left leg ad keep your upper body straight. Then made your body go straight down and up.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // exercise = 10
  {
    id: "210",
    name: "Split Squat Right",
    image: "../assets/images/GIF/Lower_body_GIFs/Split_Squat_right.gif",
    alt: "Split Squat Right.gif",
    time: "x 15",
    steps: "Take a big step forward with your right leg ad keep your upper body straight. Then made your body go straight down and up.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "lowerbody",
  },
  // abs exercise
  // exercise = 1
  {
    id: "301",
    name: "Jumping Jack",
    image: "../assets/images/GIF/Full_body_GIFs/jumping_jack.gif",
    alt: "jumping jack.gif",
    time: "x 00.20s",
    steps: "Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead return to the start position then do the next rep.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 2
  {
    id: "302",
    name: "Sit-Ups",
    image: "../assets/images/GIF/ABS_GIFs/Situps.gif",
    alt: "Sit-Ups.gif",
    time: "x 15",
    steps: "Lie on your back with your hands behind your eyes then lift your upper body off the floor and slowly up to the sitting position Don't tug your neck when you get up slowly go back to the position and repeat it.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 3
  {
    id: "303",
    name: "Side Bridges Left",
    image: "../assets/images/GIF/ABS_GIFs/Side_bridges_left.gif",
    alt: "side Bridges left.gif",
    time: "x 15",
    steps: "Lie on your right side put your right elbow directly under your shoulders and put your left hand on your waist place your left leg on your right leg raise your hips upward hold for 2-4 seconds then go back to the start position.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 4
  {
    id: "304",
    name: "Side Bridges Right",
    image: "../assets/images/GIF/ABS_GIFs/Side_bridges_right.gif",
    alt: "side Bridges right.gif",
    time: "x 15",
    steps: "Lie on your left side put your left elbow directly under your shoulders and put your right hand on your waist place your right leg on your leg raise your hips upward hold for 2-4 seconds then go back to the start position.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 5
  {
    id: "305",
    name: "Abdominal Crunches",
    image: "../assets/images/GIF/ABS_GIFs/Abdominal_crunches.gif",
    alt: "Abdominal crunches.gif",
    time: "x 20",
    steps: "Lie on your back with your knees bent then lift your upper body off  the floor hold for few seconds and slowly return.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 6
  {
    id: "306",
    name: "Russian Twists",
    image: "../assets/images/GIF/ABS_GIFs/russian_twists.gif",
    alt: "Russian Twist.gif",
    time: "x 26",
    steps: "Sit on the floor with your knees bent, feet lifted a little bit and back tilted backwards Then hold your hands together and twist from side to side.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 7
  {
    id: "307",
    name: "Heel Touch",
    image: "../assets/images/GIF/ABS_GIFs/Heel_touch.gif",
    alt: "Heel touch.gif",
    time: "x 20",
    steps: "Lie on the ground with your legs bent and your arms by you sides. Slightly lift your upper body off the floor and make your hands alternately reach your heels.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 8
  {
    id: "308",
    name: "Leg Raises",
    image: "../assets/images/GIF/ABS_GIFs/Leg_raises.gif",
    alt: "Leg Raises.gif",
    time: "x 20",
    steps: "Lie down on your back and put your hands beneath your hips for supporrt. Then lift your legs up until they form a right angle with the floor. Slowly bring your legs back down and repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 9
  {
    id: "309",
    name: "Bicycle Crunches",
    image: "../assets/images/GIF/ABS_GIFs/Bicycle_crunches.gif",
    alt: "Bicycle Crunches.gif",
    time: "x 26",
    steps: "Lie on the floor with your hands behind your ears. Raise your knees and close your right elbow toward your left knee, then close your left elbow toward your right knee, Repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // exercise = 10
  {
    id: "310",
    name: "V-up",
    image: "../assets/images/GIF/ABS_GIFs/V-up.gif",
    alt: "V-up.gif",
    time: "x 16",
    steps: "Lie on your back with your arms and legs extended and your legs squeezed together.Raise your upper body and legs, use your arms to touch your toes, then go back to the start position and repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "abs",
  },
  // chest exercise
  // exercise = 1
  {
    id: "401",
    name: "Jumping Jack",
    image: "../assets/images/GIF/Full_body_GIFs/jumping_jack.gif",
    alt: "jumping jack.gif",
    time: "x 00.20s",
    steps: "Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead return to the start position then do the next rep.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 2
  {
    id: "402",
    name: "Arm circles",
    image: "../assets/images/GIF/CHEST_GIFs/arm-circles.gif",
    alt: "arm-circles.gif",
    time: "x 20",
    steps: "Stand on the floor with your arms extened straight out to the sides at shoulder height. Move your arms forward in circles, and then move backwards.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 3
  {
    id: "403",
    name: "Burpees",
    image: "../assets/images/GIF/CHEST_GIFs/burpees.gif",
    alt: "burpees.gif",
    time: "x 15",
    steps: "Stand with your feet shoulder width apart, then put your hands on the ground and kick your feet backward. Do a quick push-up then jump up.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 4
  {
    id: "404",
    name: "Staggered Push-Up",
    image: "../assets/images/GIF/CHEST_GIFs/Staggered_pushups.gif",
    alt: "Staggered_pushups.gif",
    time: "x 18",
    steps: "Start in the regular push-up position, but with one hand in front of the other. Then do a push-up and switch the other hand in front. Remember to keep your body straight.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 5
  {
    id: "405",
    name: "Hindu Push-Up",
    image: "../assets/images/GIF/CHEST_GIFs/Hindu_push_ups.gif",
    alt: "Hindu_push_ups.gif",
    time: "x 18",
    steps: "Start with your hands and feet touching the floor, body bent and butt up in an upside down 'V' shape. Then bend your elbows to bring your body towards the floor  When your body is close to the floor, raise your upper body up as far as possible. then return to the original position and repeat.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 6
  {
    id: "406",
    name: "Push-Up & Rotation",
    image: "../assets/images/GIF/CHEST_GIFs/Pushup & rotation.gif",
    alt: "push-up & rotation.gif",
    time: "x 16",
    steps: "Start in the push-up position. Then go down for a push-up and as you come up, rotate your upper body  and extend your right arm upwards. Repeat the exercise with the other arm. It's a great exercise for the chest, shoulders, arms and core.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 7
  {
    id: "407",
    name: "Box Push-up",
    image: "../assets/images/GIF/CHEST_GIFs/Box_Pushups.gif",
    alt: "Box_Pushups.gif",
    time: "x 14",
    steps: "Start on all fours with your knees under your butt and your hands directly under your shoulders. Bend your elbows and do a push-up, Return to the start position and repeat.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 8
  {
    id: "408",
    name: "Spiderman Push-up",
    image: "../assets/images/GIF/CHEST_GIFs/Spiderman_pushup.gif",
    alt: "Spiderman_pushup.gif",
    time: "x 22",
    steps: "Start in the regular push-up position, When lowering your torso downward, bend and lift one leg to the side. Then return to the start position and switch to the other leg. Remember to keep your body straight.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 9
  {
    id: "409",
    name: "Decline Push-up",
    image: "../assets/images/GIF/CHEST_GIFs/Decline_pushups.gif",
    alt: "Decline_pushups.gif",
    time: "x 16",
    steps: "Start on all fours with your knees under you butt and your hands under your shoulders. Then elevate your feet on a chair or bench, and push your body up and down mainly using your arm strength.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // exercise = 10
  {
    id: "410",
    name: "Shoulder Stretch",
    image: "../assets/images/GIF/CHEST_GIFs/Shoulder_stretch.gif",
    alt: "Shoulder_stretch.gif",
    time: "x 00:35s",
    steps: "Place one arm across your body, parallel to the ground, then use the other arm to pull the parallel arm toward your chest. Hold for a while, switch arms and request the exercise. Keep the inside arm straight during the exercise. Do it for right and left.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "chest",
  },
  // arm exercise
  // exercise = 1
  {
    id: "501",
    name: "Jumping Jack",
    image: "../assets/images/GIF/Full_body_GIFs/jumping_jack.gif",
    alt: "jumping jack.gif",
    time: "x 00.20s",
    steps: "Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead return to the start position then do the next rep.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 2
  {
    id: "502",
    name: "Arm Circles Clockwise",
    image: "../assets/images/GIF/ARM_GIFs/arm-circles.gif",
    alt: "arm-circles.gif",
    time: "x 00.30s",
    steps: "Stand on the floor with your arms extended straight out to the sides at shoulder height. Move your arms clockwise in circles fast. Try to do it as fast as you can. It's a great exercise for the deltoid muscle.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 3
  {
    id: "503",
    name: "Arm Circles Anit-Clockwise",
    image: "../assets/images/GIF/ARM_GIFs/arm_circles_anticlockwise.gif",
    alt: "arm_circles_anticlockwise.gif",
    time: "x 00.30s",
    steps: "Stand on the floor with your arms extended straight out to the sides at shoulder height. Move your arms anticlockwise in circles fast. Try to do it as fast as you can. It's a great exercise for the deltoid muscle.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 4
  {
    id: "504",
    name: "Floor Tricep Dips",
    image: "../assets/images/GIF/ARM_GIFs/Floor_triceps_Dips.gif",
    alt: "Floor_triceps_Dips.gif",
    time: "x 18",
    steps: "Sit on the floor with your knees bent and feet flat on the floor. Put your hands beneath your shoulders with your fingers pointing toward your hips. Lift your hips off thr floor. Then bend and extend your elbows to lower and lift your hips. Repeat the exercise to strengthn your upper arms.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 5
  {
    id: "505",
    name: "Military Push-up",
    image: "../assets/images/GIF/ARM_GIFs/military_pushups.gif",
    alt: "military_pushups.gif",
    time: "x 16",
    steps: "Start in a push-up position with your hands directly under your shoulders and feet no more than 12 inches apart.Bend your elbows and lower your body until your upper arms are parallel to the floor. Stay in this position for one second and then push your body back to the starting position and repeat the exercise. Please remember that your elbows should be close to your body during this exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 6
  {
    id: "506",
    name: "Alternating Hooks",
    image: "../assets/images/GIF/ARM_GIFs/alternating_hooks.gif",
    alt: "alternating_hooks.gif",
    time: "x 00:30s",
    steps: "Stand with your feet shoulder-width apart, and place your dominantfoot slightly forward. Slightly bend your knees,clench your fists and bend your elbows at 90 degrees.Raise your right arm to shoulder height and keep your forearm parallel to the ground. Rotate your shouldersand hips and punch towards the left, switch sides and repeat.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 7
  {
    id: "507",
    name: "Modified Push-up Low Hold",
    image: "../assets/images/GIF/ARM_GIFs/modified_pushup_hold.gif",
    alt: "modified_pushup_hold.gif",
    time: "x 00:30s",
    steps: "Start in the standard push-up position but with your feet shoulder-width apart and knees on the ground. Lower your body until your elbows are at 90 degrees. Hold this position.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 8
  {
    id: "508",
    name: "Chest Press Pulse",
    image: "../assets/images/GIF/ARM_GIFs/Chest_Press_Pulse.gif",
    alt: "Chest_Press_Pulse.gif",
    time: "x 00:20s",
    steps: "Hold your forearm together at shoulder height and bend your elbows with your hands together to make an 'L' shape. Then lift your forearm up and down.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 9
  {
    id: "509",
    name: "Triceps Stretch Left",
    image: "../assets/images/GIF/ARM_GIFs/triceps_stretch_left.gif",
    alt: "triceps_stretch_left.gif",
    time: "x 00:30s",
    steps: "Put your left hand on your back, use your right hand to grab your left elbow and gently pull it. Hold this position for a few seconds.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // exercise = 10
  {
    id: "510",
    name: "Triceps Stretch Right",
    image: "../assets/images/GIF/ARM_GIFs/triceps-stretch_right.gif",
    alt: "triceps_stretch_right.gif",
    time: "x 00:30s",
    steps: "Put your right hand on your back, use your left hand to grab your right elbow and gently pull it. Hold this position for a few seconds.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "arms",
  },
  // shoulder and back exercise
  // exercise = 1
  {
    id: "601",
    name: "Jumping Jack",
    image: "../assets/images/GIF/Full_body_GIFs/jumping_jack.gif",
    alt: "jumping jack.gif",
    time: "x 00.20s",
    steps: "Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead return to the start position then do the next rep.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 2
  {
    id: "602",
    name: "Hyper Extension",
    image: "../assets/images/GIF/Shoulder&back_GIFs/Hyperextension.gif",
    alt: "Hyperextension.gif",
    time: "x 16",
    steps: "Lie down on your stomach with your toes touching the floor, and your chin on your hand. Raise your chest up as high as possible off the floor. Hold this podition for a few seconds and then go back to the start position.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 3
  {
    id: "603",
    name: "Pike PushUp",
    image: "../assets/images/GIF/Shoulder&back_GIFs/pike-push-up.gif",
    alt: "pike-push-up.gif",
    time: "x 14",
    steps: "Start with your hands and feet on the floor.Put your hands shoulder width apart. bend your body, and life your hips up in an upside down 'V' shape. Bend your elbows, and bring your head close to the floor. Push your body back, and repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 4
  {
    id: "604",
    name: "Reverse PushUp",
    image: "../assets/images/GIF/Shoulder&back_GIFs/reverse_push_up.gif",
    alt: "reverse_push_up.gif",
    time: "x 12",
    steps: " Start in the regular push-up position. Lower your body down, then bend your knees and move  your hips backward with your arms straight. Go back to the push-up position and repeat.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 5
  {
    id: "605",
    name: "Inchworms",
    image: "../assets/images/GIF/Shoulder&back_GIFs/Inchworm.gif",
    alt: "Inchworm.gif",
    time: "x 20",
    steps: "Start with your feet shoulder width apart. Bend your body and walk your hands in front of you as far as  you can, then walk your hands back. repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 6
  {
    id: "606",
    name: "Cat Cow Pose",
    image: "../assets/images/GIF/Shoulder&back_GIFs/cat-cow.gif",
    alt: "cat-cow.gif",
    time: "x 00:30s",
    steps: "Start on all fours with your knees under your butt and your hands directly under your shoulders. Then take a breath and make your belly fall down, shoulders roll back and head come up towards the ceiling. As you exhale, curve your back upward and let your head come down. Repeat the exercise. Do it slowly with each step of this exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 7
  {
    id: "607",
    name: "Supine PushUp",
    image: "../assets/images/GIF/Shoulder&back_GIFs/supine_push_up.gif",
    alt: "supine_push_up.gif",
    time: "x 14",
    steps: "Lie on your back with your feet flat on the floor and your arms bent on two sides. Push your chest up as far as you can, and then slowly go back to the start position.  repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 8
  {
    id: "608",
    name: "Floor Y Raises",
    image: "../assets/images/GIF/Shoulder&back_GIFs/floor_Y_raises.gif",
    alt: "floor_Y_raises.gif",
    time: "x 14",
    steps: "Lie face down on the floor with your arms fully extened and your hands pointing up, your body should be in the shape of the letter 'Y'. Raise your arms off the ground as far as you can and pause them at the top for 2seconds. Slowly go back to the start position, and repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 9
  {
    id: "609",
    name: "Reverse Snow Angles",
    image: "../assets/images/GIF/Shoulder&back_GIFs/reverse_snow_angels.gif",
    alt: "reverse_snow_angels.gif",
    time: "x 12",
    steps: "Lie on your stomach with your arms at your sides. Lift your arms up and extend them over your head to touch your thumbs. Then slowly bring them back. Repeat the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },
  // exercise = 10
  {
    id: "610",
    name: "Child's Pose",
    image: "../assets/images/GIF/Shoulder&back_GIFs/child_pose.gif",
    alt: "child_pose.gif",
    time: "x 00:30s",
    steps: "Start with your knees and hands on the floor. Put your hands a little forward,widen your knees and put your toes together.Take a breath, then exhale and sit back. Try to make your butt touch your heels.  Relax your elbows, make your forehead touch the floor and try to lower your chest close to thr floor.  Hold this position. Keep your arms stretched forward as you sit back. Make sure there is enough space between your shoulders and ears during the exercise.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "shoulder",
  },

  // leg exercise
  // exercise = 1
  {
    id: "701",
    name: "Jumping Jack",
    image: "../assets/images/GIF/Full_body_GIFs/jumping_jack.gif",
    alt: "jumping jack.gif",
    time: "x 00.20s",
    steps: "Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead return to the start position then do the next rep.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 2
  {
    id: "702",
    name: "Burpees",
    image: "../assets/images/GIF/Leg_GIFs/burpees.gif",
    alt: "burpees.gif",
    time: "x 10",
    steps: "Stand with your feet shoulder width apart. then put your hands on the ground and kick your feet backward Do a quick push up and then jump up.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 3
  {
    id: "703",
    name: "Jumping Squats",
    image: "../assets/images/GIF/Leg_GIFs/jumping_squats.gif",
    alt: "jumping_squats.gif",
    time: "x 14",
    steps: "Start in the start position, then jump up using your abdominal muscles for strength. This exercise works your abdomen.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 4
  {
    id: "704",
    name: "Bottom Leg Lift Left",
    image: "../assets/images/GIF/Leg_GIFs/bottom-leg-lift_left.gif",
    alt: "bottom-leg-lift_left.gif",
    time: "x 12",
    steps: "Lie on your left side with your head resting on your left hand. Then put your right foot forward on the floor. Lift your left leg up and down.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 5
  {
    id: "705",
    name: "Bottom Leg Lift Right",
    image: "../assets/images/GIF/Leg_GIFs/bottom_leg_lift_right.gif",
    alt: "bottom_leg_lift_right.gif",
    time: "x 12",
    steps: "Lie on your right side with your head resting on your right hand. Then put your left foot forward  on the floor. Lift your right leg up and down.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 6
  {
    id: "706",
    name: "Curtsy Lunges",
    image: "../assets/images/GIF/Leg_GIFs/curtsy_lunges.gif",
    alt: "curtsy_lunges.gif",
    time: "x 14",
    steps: "Stand straight up. Then stand back with your left leg to the right, and bend your knees  at the same time. Go back to the start positon and switch to the other side.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 7
  {
    id: "707",
    name: "Glute Kick Back Left",
    image: "../assets/images/GIF/Leg_GIFs/glute_kick_back_left.gif",
    alt: "glute_kick_back_left.gif",
    time: "x 12",
    steps: "Start with all fours with your knees under your butt and your hands directly under your shoulders. Then kick one leg back until it is parallel with the ground. Switch to the other side after several sets.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 8
  {
    id: "708",
    name: "Glute Kick Back Right",
    image: "../assets/images/GIF/Leg_GIFs/glute_kick_back_right.gif",
    alt: "glute_kick_back_right.gif",
    time: "x 12",
    steps: "Start with all fours with your knees under your butt and your hands directly under your shoulders. Then kick one leg back until it is parallel with the ground. Switch to the other side after several sets.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 9
  {
    id: "709",
    name: "Wall Sit",
    image: "../assets/images/GIF/Leg_GIFs/wall_sit.gif",
    alt: "wall_sit.gif",
    time: "x 00:40s",
    steps: "Start with your back against the wall, then side down until your knees are at 90 degree angle. Keep your back against the wall with your hands and arms away from your legs.Hold this position. The exercise is to strengthen the quadriceps muscles.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
  // exercise = 10
  {
    id: "710",
    name: "Standing Calf Raises",
    image: "../assets/images/GIF/Leg_GIFs/standing_calf_raises.gif",
    alt: "standing_calf_raises.gif",
    time: "x 20",
    steps: "Start with toes in an upper floor, balance your body with your toes and give your strength to push your body up and down and hands in your hip. Take breath and do it in your toes.",
    diet_image: "../assets/images/DIET MANAGEMENT.png",
    diet_alt: "diet image",
    diet_desc: "Take sufficient proteins, It is good for health",
    type: "leg",
  },
];
localStorage.setItem("exercise_card", JSON.stringify(exercise))

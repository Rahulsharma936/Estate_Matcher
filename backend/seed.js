const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Property = require('./models/Property');

dotenv.config();

const properties = [
    {
        title: 'Modern Glass Villa',
        price: '12,45,00,000',
        location: 'Alibaug, MH',
        beds: 5,
        baths: 4,
        sqft: 3500,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
        type: 'Modern',
        tags: ['Sea View', 'Smart Home']
    },
    {
        title: 'Minimalist Penthouse',
        price: '8,90,00,000',
        location: 'Worli, Mumbai',
        beds: 3,
        baths: 2,
        sqft: 2200,
        image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=800',
        type: 'Industrial',
        tags: ['City View', 'High Ceiling']
    },
    {
        title: 'Eco-Friendly Forest Retreat',
        price: '4,20,00,000',
        location: 'Coorg, KA',
        beds: 4,
        baths: 3,
        sqft: 2800,
        image: 'https://images.unsplash.com/photo-1449156001437-37c641cc7745?auto=format&fit=crop&q=80&w=800',
        type: 'Rustic',
        tags: ['Sustainable', 'Nature']
    },
    {
        title: 'Cyber-Modern Loft',
        price: '2,50,00,000',
        location: 'Hitech City, Hyderabad',
        beds: 2,
        baths: 2,
        sqft: 1800,
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
        type: 'Futuristic',
        tags: ['Studio', 'Tech-Ready']
    },
    {
        title: 'Heritage Garden Estate',
        price: '15,10,00,000',
        location: 'Jaipur, RJ',
        beds: 6,
        baths: 5,
        sqft: 4200,
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
        type: 'Traditional',
        tags: ['Palace View', 'Historic']
    }
];

mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI)
    .then(async () => {
        console.log('Seeding data...');
        await Property.deleteMany({});
        await Property.insertMany(properties);
        console.log('Seed completed!');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

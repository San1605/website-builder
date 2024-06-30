import { v4 as uuidv4 } from 'uuid';


export const templates = [
    {
        id: 'template1',
        name: 'Empty Page',
        components: [
            { id: uuidv4(), type: 'Text', left: 50, top: 50, content: 'Start creating your page here', style: { fontSize: '24px', color: '#666' } }
        ],
        globalStyle: {
            backgroundColor: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            color: '#333333',
            lineHeight: '1.6',
            boxSizing: 'border-box',
            margin: '0',
            padding: '20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease'
        }
    },
    {
        id: 'template2',
        name: 'Simple Landing Page',
        components: [
            { id: uuidv4(), type: 'Text', left: 0, top: 0, content: 'Logo', style: { fontSize: '24px', fontWeight: 'bold', padding: '20px' } },
            { id: uuidv4(), type: 'Text', left: 0, top: 80, content: 'Welcome to Our Website', style: { fontSize: '48px', fontWeight: 'bold', textAlign: 'center', width: '100%' } },
            { id: uuidv4(), type: 'Image', left: 'calc(50% - 200px)', top: 200, content: 'https://via.placeholder.com/400x300', style: {} },
            { id: uuidv4(), type: 'Text', left: 0, top: 520, content: 'Learn more about our services', style: { fontSize: '24px', textAlign: 'center', width: '100%' } },
            { id: uuidv4(), type: 'Button', left: 'calc(50% - 75px)', top: 580, content: 'Get Started', style: { backgroundColor: '#4CAF50', color: 'white', padding: '15px 30px', borderRadius: '5px', fontSize: '18px' } }
        ],
        globalStyle: {
            backgroundColor: '#f0f0f0',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#333333',
            lineHeight: '1.6',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            minHeight: '100vh',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3), linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)'
        }
    },
    {
        id: 'template3',
        name: 'E-commerce Product Page',
        components: [
            { id: uuidv4(), type: 'Text', left: 0, top: 0, content: 'Shop Name', style: { fontSize: '24px', fontWeight: 'bold', padding: '20px' } },
            { id: uuidv4(), type: 'Text', left: 0, top: 80, content: 'Product Name', style: { fontSize: '36px', fontWeight: 'bold', textAlign: 'center', width: '100%' } },
            { id: uuidv4(), type: 'Image', left: 50, top: 150, content: 'https://via.placeholder.com/400x400', style: {} },
            { id: uuidv4(), type: 'Text', left: 500, top: 150, content: 'Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.', style: { fontSize: '18px', maxWidth: '400px' } },
            { id: uuidv4(), type: 'Text', left: 500, top: 300, content: '$99.99', style: { fontSize: '24px', fontWeight: 'bold' } },
            { id: uuidv4(), type: 'Button', left: 500, top: 350, content: 'Add to Cart', style: { backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: '5px' } }
        ],
        globalStyle: {
            backgroundColor: '#ffffff',
            fontFamily: 'Roboto, Arial, sans-serif',
            color: '#333333',
            lineHeight: '1.6',
            boxSizing: 'border-box',
            margin: '0',
            padding: '20px',
            minHeight: '100vh',
            backgroundImage: 'linear-gradient(to right, #f9f9f9 1px, transparent 1px), linear-gradient(to bottom, #f9f9f9 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            boxShadow: '0 0 20px rgba(0,0,0,0.05) inset'
        }
    },
    {
        id: 'template4',
        name: 'Portfolio Page',
        components: [
            { id: uuidv4(), type: 'Text', left: 0, top: 0, content: 'My Portfolio', style: { fontSize: '24px', fontWeight: 'bold', padding: '20px' } },
            { id: uuidv4(), type: 'Text', left: 0, top: 80, content: 'Recent Projects', style: { fontSize: '36px', fontWeight: 'bold', textAlign: 'center', width: '100%' } },
            { id: uuidv4(), type: 'Image', left: 50, top: 150, content: 'https://via.placeholder.com/300x200', style: {} },
            { id: uuidv4(), type: 'Text', left: 50, top: 370, content: 'Project 1', style: { fontSize: '24px', fontWeight: 'bold' } },
            { id: uuidv4(), type: 'Image', left: 400, top: 150, content: 'https://via.placeholder.com/300x200', style: {} },
            { id: uuidv4(), type: 'Text', left: 400, top: 370, content: 'Project 2', style: { fontSize: '24px', fontWeight: 'bold' } },
            { id: uuidv4(), type: 'Button', left: 'calc(50% - 75px)', top: 450, content: 'View More', style: { backgroundColor: '#008CBA', color: 'white', padding: '10px 20px', borderRadius: '5px' } }
        ],
        globalStyle: {
            backgroundColor: '#f9f9f9',
            fontFamily: 'Montserrat, Helvetica, sans-serif',
            color: '#333333',
            lineHeight: '1.6',
            boxSizing: 'border-box',
            margin: '0',
            padding: '20px',
            minHeight: '100vh',
            backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10%), radial-gradient(circle, #ffffff 10%, transparent 10%)',
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 25px 25px',
            animation: 'animateBackground 5s linear infinite',
            '@keyframes animateBackground': {
                '0%': { backgroundPosition: '0 0, 25px 25px' },
                '100%': { backgroundPosition: '50px 50px, 75px 75px' }
            }
        }
    },
    {
        id: 'template5',
        name: 'Blog Page',
        components: [
            { id: uuidv4(), type: 'Text', left: 0, top: 0, content: 'My Blog', style: { fontSize: '24px', fontWeight: 'bold', padding: '20px' } },
            { id: uuidv4(), type: 'Text', left: 50, top: 80, content: 'Latest Posts', style: { fontSize: '36px', fontWeight: 'bold' } },
            { id: uuidv4(), type: 'Text', left: 50, top: 140, content: 'Blog Post Title 1', style: { fontSize: '24px', fontWeight: 'bold' } },
            { id: uuidv4(), type: 'Text', left: 50, top: 180, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', style: { fontSize: '16px', maxWidth: '600px' } },
            { id: uuidv4(), type: 'Text', left: 50, top: 260, content: 'Read More', style: { fontSize: '16px', color: '#1a0dab', textDecoration: 'underline' } },
            { id: uuidv4(), type: 'Text', left: 50, top: 320, content: 'Blog Post Title 2', style: { fontSize: '24px', fontWeight: 'bold' } },
            { id: uuidv4(), type: 'Text', left: 50, top: 360, content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', style: { fontSize: '16px', maxWidth: '600px' } },
            { id: uuidv4(), type: 'Text', left: 50, top: 440, content: 'Read More', style: { fontSize: '16px', color: '#1a0dab', textDecoration: 'underline' } }
        ],
        globalStyle: {
            backgroundColor: '#ffffff',
            fontFamily: 'Georgia, Times, serif',
            color: '#333333',
            lineHeight: '1.8',
            boxSizing: 'border-box',
            margin: '0',
            padding: '40px',
            minHeight: '100vh',
            backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
            backgroundSize: '25px 25px',
            boxShadow: '0 0 30px rgba(0,0,0,0.05) inset',
            position: 'relative',
            '::before': {
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '5px',
                background: 'linear-gradient(to right, #ff6b6b, #4ecdc4, #45b7d1)',
            }
        }
    }
];



export const dbName = 'TemplatesDB';
export const storeName = 'templatesStore';
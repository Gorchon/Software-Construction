const express = require('express');
const cors = require('cors');
const app  = express();
const port = 3000
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userRoutes = require('./routes/userRoutes');
const descriptionRoutes = require('./routes/descriptionRoutes');
const feedBackRoutes = require('./routes/feedBackRoutes');
const chatRoutes = require('./routes/chatOpenRoutes');
app.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({info: "The greater the sensibility the greater the suffering … much suffering. "}) // JSON response we can see this in the browser if we go to http://localhost:3000/ and 
    }
);
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    
    }

    
);
//endpoints 
app.use('/users', userRoutes);
app.use('/descriptions', descriptionRoutes);
 app.use('/feedBack', feedBackRoutes);
 app.use('/chat', chatRoutes);
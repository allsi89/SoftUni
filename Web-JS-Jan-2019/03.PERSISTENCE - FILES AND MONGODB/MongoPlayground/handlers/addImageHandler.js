const formidable = require('formidable');

const Image = require('mongoose').model('Image');

module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname === '/delete' && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}

function addImage(req, res) {
    const form = formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            throw err;
        }

        const tags = fields.tagsId.split(',').reduce((acc,currentVal,index,arr) => {
            if (acc.includes(currentVal) || currentVal.length === 0) {
            return acc;
            
            } else {
                acc.push(currentVal);
                return acc;
            }
        },[]);

        const image = {
            url: fields.imageUrl,
            description: fields.description,
            tags
        }

        Image.create(image)
            .then(image => {
                res.writeHead(302, {
                    'location': '/'
                })
                res.end();
            }).catch(err => {
                res.writeHead(500, {
                    'content-type': 'text/plain'
                })
                res.write('500 Server Error');
                res.end();
            })
    })
}

const apiKey = 'hSoJeCHxwNab44i33StDQxR3vMwb4bmI';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json() )
    .then(({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch ( console.warn );

    // https://media0.giphy.com/media/bppZLE5CeLhj5rt6tl/giphy.gif?cid=5938dd1d80b4331c097e423fbca2bee24347493bdf64fc26&rid=giphy.gif&ct=g


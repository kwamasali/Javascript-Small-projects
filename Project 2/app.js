let data = [
    {
        name: 'Karen',
        age: '25'
    },
    {
        name: 'Dawn',
        age: '15'
    },
    {
        name: 'Buffy',
        age: '20'
    },
    {
        name: 'Zander',
        age: '29'
    },
    {
        name: 'Tara',
        age: '23'
    },
    {
        name: 'Erica',
        age: '40'
    },  
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return(
        '<div>' + item.name + '  ' + 'is  ' + item.age + '  years old' + '</div>'
    );
});

info.innerHTML = details.join('\n')
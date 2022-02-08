console.log('ciao bello')


const container = document.getElementById('main_container')


for (let i = 1; i <=100 ; i++) {
    console.log(i)
    const div = document.createElement('div')
    div.classList.add("box")


    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz', i)
        div.append('fizzbuzz')
        
    }
    else if(i % 3 === 0){
        console.log('fizz', i)
        div.append('fizz')
    } else if (i % 5 === 0){
        console.log ('buzz', i)
        div.append('buzz')
    } else{
        div.append(i)
    }

    container.append(div)
}
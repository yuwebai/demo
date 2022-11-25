const nums = document.querySelector('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')
runAnimation()
function reseDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    nums.forEach((num) => {
        num.classList.value = ''

    });
    nums[0].classList.add('in')
}
function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1
        num.addEventListener('animationend', (e) => {
            if (e.runAnimation === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.runAnimation === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })

    })
}
replay.addEventListener('click', () => {
    reseDOM()
    runAnimation()
})
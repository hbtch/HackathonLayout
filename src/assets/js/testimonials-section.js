const testimonials = [
    {
        text: 'We couldn\'t be happier with the outcome. The team was incredibly professional, attentive to details, and always kept us in the loop. Highly recommend!',
        name: 'Michael Johnson',
        jobTitle: 'Interior Designer',
        photoSrc: 'src/assets/image/testimonials/johnson.jpg'
    },
    {
        text: 'Working with consik a fantastic experience. They truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were The team.',
        name: 'Brooklyn Simmons',
        jobTitle: 'Architect Designer',
        photoSrc: 'src/assets/image/testimonials/simmons.jpg'
    },
    {
        text: 'An absolute pleasure to work with. They listened to all our needs and executed every detail perfectly. Our space feels both functional and stunning, exactly how we envisioned it.',
        name: 'Sophia Martinez',
        jobTitle: 'Creative Director',
        photoSrc: 'src/assets/image/testimonials/martinez.jpg'
    },
];

const photoList = document.querySelector('.author_photo-list');
const photoItems = document.querySelectorAll('.author_photo-item');
let testimonialsSlider = document.querySelector('.testimonials_slider');
let currentTestimonial = 1;
let isClicked = false;
function createDOMElement(option) {
    let {
        tagName = 'div',
        appendParent = null,
        classList = '',
        textContent = '',
        attributes = {},
    } = option;
    const element = document.createElement(tagName);
    if (appendParent) appendParent.append(element);
    if (classList) {
        classList = classList.split(" ");
        classList.forEach(newClass => {
                element.classList.add(newClass)
            }
        );
    }
    if (textContent) {
        element.textContent = textContent;
    }
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

async function createTestimonial(testimonial, className) {
    let element;
    if (className) {
        element = createDOMElement({
            classList: `testimonialsWrapper flex flex_column ${className}`,
        })
    } else {
        element = createDOMElement({
            appendParent: testimonialsSlider,
            classList: `testimonialsWrapper flex flex_column`,
        })
    }

    createDOMElement({
        tagName: 'p',
        appendParent: element,
        classList: `testimonials_box-text`,
        textContent: `${testimonial.text}`,
    })
    const testimonialsSignature = createDOMElement({
        appendParent: element,
        classList: 'testimonials_signature flex',
    })
    createDOMElement({
        tagName: 'img',
        appendParent: testimonialsSignature,
        classList: 'quote-icon',
        attributes: {
            src: "images/quote.png",
            alt: "quote icon",
        },
    })

    const authorBox = createDOMElement({
        appendParent: testimonialsSignature,
        classList: 'flex flex_column',
    })
    createDOMElement({
        tagName: 'p',
        appendParent: authorBox,
        classList: 'testimonials_signature_author-name',
        textContent: `${testimonial.name}`,
    })
    createDOMElement({
        tagName: 'p',
        appendParent: authorBox,
        classList: 'testimonials_signature_author-job',
        textContent: `${testimonial.jobTitle}`,
    })
    return element;
}

export function testimonialsSection() {
    photoList.addEventListener('click', async (e) => {
        if (isClicked) return;
        const target = e.target.closest('.author_photo-item');
        if (target) {
            const lastTestimonial = currentTestimonial;
            currentTestimonial = target.getAttribute('data-id')
            if (currentTestimonial === lastTestimonial) return
            isClicked = true;
            const oldTestimonial = document.querySelector('.testimonialsWrapper');
            photoItems.forEach(photo => photo.classList.remove('author_photo-item-active'));
            target.classList.add('author_photo-item-active');
            if (currentTestimonial < lastTestimonial) {
                const newTestimonial = await createTestimonial(testimonials[currentTestimonial], 'testimonialsWrapper_up');
                testimonialsSlider.prepend(newTestimonial)
                oldTestimonial.classList.add('testimonialsWrapper_up')
                await new Promise(resolve => setTimeout(resolve, 10))
                oldTestimonial.classList.add('testimonialsWrapper_transition')
                newTestimonial.classList.add('testimonialsWrapper_transition')
                newTestimonial.classList.remove('testimonialsWrapper_up')
                oldTestimonial.classList.remove('testimonialsWrapper_up')
                oldTestimonial.classList.add('testimonialsWrapper_current')
                newTestimonial.classList.add('testimonialsWrapper_current')
                oldTestimonial.ontransitionend = () => {
                    newTestimonial.classList.remove('testimonialsWrapper_transition')
                    oldTestimonial.remove()
                    isClicked = false;
                };
            } else {
                const newTestimonial = await createTestimonial(testimonials[currentTestimonial]);
                await new Promise(resolve => setTimeout(resolve, 10))
                oldTestimonial.classList.add('testimonialsWrapper_transition')
                newTestimonial.classList.add('testimonialsWrapper_transition')
                oldTestimonial.classList.add('testimonialsWrapper_up')
                newTestimonial.classList.add('testimonialsWrapper_up')
                oldTestimonial.ontransitionend = () => {
                    newTestimonial.classList.remove('testimonialsWrapper_transition')
                    oldTestimonial.remove()
                    newTestimonial.classList.remove('testimonialsWrapper_up')
                    isClicked = false;
                };
            }
        }
    })
}

testimonialsSection()

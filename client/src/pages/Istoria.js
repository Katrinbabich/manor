import Podval from "../components/Podval";

const Istoria = () => {
    return (
        <div>
            <iframe
                src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=19BKcCErNHy5-CErvjxtec8etaN2AJC4PDr8Ec84Cp68&font=Default&lang=ru&initial_zoom=2&height=650'
                width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowFullScreen
                frameBorder='0'></iframe>

            <Podval/>
        </div>
    );
};
export default Istoria;
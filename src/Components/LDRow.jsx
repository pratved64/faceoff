import PropTypes from "prop-types";

function LDRow({rank, name, img})
{
    LDRow.propTypes = {
            rank: PropTypes.any,
            name: PropTypes.any,
            img: PropTypes.any,
        };

    return (
        <div className="w-[96%] flex text-white 2xl:text-3xl justify-between items-center px-4 py-2 mt-2 sm:mt-4 border-2 sm:text-2xl">
            <p>{rank}</p>
            <p>{name}</p>
            <img src={img} alt={name} className="w-28 sm:w-44 lg:w-56 border-2"/>
        </div>
    )
}

export default LDRow
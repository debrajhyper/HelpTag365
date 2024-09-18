import PropTypes from 'prop-types';

export function HeroBg({ height }) {
    return (
        <section
            className={`absolute top-0 w-[96%] rounded-bl-[4rem] rounded-br-[4rem] z-10 bg-[radial-gradient(50%_50%_at_50%_50%,_#FFFFFF_0%,_#EDF4FE_100%)]`}
            style={{ height }}
        >
        </section>
    )
}

HeroBg.propTypes = {
    height: PropTypes.string.isRequired
};
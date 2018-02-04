import _reduce from 'lodash/reduce';

function composeContainers(containers, component) {
    return _reduce(
        containers,
        (accumulator, container) => (
            container(accumulator)
        ),
        component
    );
}

export default composeContainers;
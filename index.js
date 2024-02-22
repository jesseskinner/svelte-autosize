import autosize from 'autosize';

const action = (node) => {
	autosize(node);
    node.addEventListener("change",() => {
        setTimeout(() => {  autosize.update(node); }, 100);
    })
	return {
		destroy() {
			autosize.destroy(node);
		},
	};
};

action.update = autosize.update;
action.destroy = autosize.destroy;

export default action;
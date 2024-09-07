export function handleMedium(event: MouseEvent): void {

    if (window.location.hostname !== 'medium.com') return;

    const target = event.target as HTMLElement;
    const divWithDataHref = target.closest('div[data-href]');

    if (divWithDataHref) {
        const dataHref = divWithDataHref.getAttribute('data-href');
        if (dataHref) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            window.open(dataHref, '_blank');
        }
    }
}

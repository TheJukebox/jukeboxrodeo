export function print_effect(text: string, element_id: string, index: number) {
    let doc = document.getElementById(element_id)
    if (doc == null) {
        console.error('Tried to run print_page_effect, but '+ element_id +' could not be found.');
        return;
    }

    if (index >= text.length) {
        return;
    }

    doc.innerHTML += text[index++];
    let ms = Math.floor(Math.random() * 101);
    setTimeout(print_effect, ms, text, element_id, index);
}
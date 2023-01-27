export default async function(url: string, name: string): Promise<void> {
    try {
        const res = await fetch(url, {
            mode: 'no-cors',
        });
        const blob = await res.blob();
        const link = document.createElement('a');

        link.href = URL.createObjectURL(blob);
        link.download = name;
        link.click();
    } catch (error) {
        console.log(error);
    }
}

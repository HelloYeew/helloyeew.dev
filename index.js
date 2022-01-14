function adjustHeaderColor(start_index, target_index) {
    console.log(target_index);
    let start_element = document.getElementById("menulinkpage" + start_index);
    let target_element = document.getElementById("menulinkpage" + target_index);
    if (target_index === 0) {
        for (let i = 1; i <= 4; i++) {
            let element = document.getElementById("menulinkpage" + i);
            element.classList.add("active");
        }
        try {
            start_element.classList.add("active");
        } catch (e) {
            console.log(e);
        }

    }
    if (target_index !== 0){
        for (let i = 1; i <= 4; i++) {
            let element = document.getElementById("menulinkpage" + i);
            try {
                element.classList.remove("active");
            } catch (e) {
                console.log(e);
            }
        }
        if (start_element.classList.contains("active")) {
            start_element.classList.remove("active");
        }
        target_element.classList.add("active");
    }
}
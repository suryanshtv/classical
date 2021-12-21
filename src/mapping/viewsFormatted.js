module.exports = {
     viewsFormatted(viewsRAW) {
        let viewsinit = "";
        let viewsinit1 = "";
        viewsinit = String(viewsRAW);
        viewsinit1 = String(viewsRAW);
        let fmt = "";
        if (viewsinit > 0 && viewsinit <= 999){
            fmt = viewsinit;
        }
        else if (viewsinit > 1000 && viewsinit <= 9999){
            fmt = viewsinit.slice(0,0)+(".")+viewsinit1.slice(1,1)+("k");
        }
        else if (viewsinit >= 10000 && viewsinit <= 99999){
            fmt = viewsinit.slice(0,2)+(".")+viewsinit1.slice(3,3)+("k");
        }
        else if (viewsinit >= 100000 && viewsinit <= 999999){
            fmt = viewsinit.slice(0,3)+(".")+viewsinit1.slice(4,4)+("k");
        }
        else if (viewsinit >= 1000000 && viewsinit <= 9999999){
            fmt = viewsinit.slice(0,1)+(".")+viewsinit1.slice(1,1)+("million");
        }
        else if (viewsinit >= 10000000 && viewsinit <= 99999999){
            fmt = viewsinit.slice(0,2)+(".")+viewsinit1.slice(3,3)+("million");
        }
        else if (viewsinit >= 100000000 && viewsinit <= 999999999){
            fmt = viewsinit.slice(0,3)+(".")+viewsinit1.slice(4,4)+("million");
        }
        else if (viewsinit >= 1000000000 && viewsinit <= 9999999999){
            fmt = viewsinit.slice(0,1)+(".")+viewsinit1.slice(1,1)+("billion");
        }
        else {
            fmt = viewsinit.slice(0,2)+(".")+viewsinit1.slice(3,3)+("billion");
        }
        return fmt;
    }
}

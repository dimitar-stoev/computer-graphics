function rgbToCmyk(r, g, b) {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error("RGB стойностите трябва да са между 0 и 255");
    }

    const rPrime = r / 255;
    const gPrime = g / 255;
    const bPrime = b / 255;

    const k = 1 - Math.max(rPrime, gPrime, bPrime);
    let c, m, y;

    if (k === 1) {
        c = m = y = 0;
    } else {
        c = (1 - rPrime - k) / (1 - k);
        m = (1 - gPrime - k) / (1 - k);
        y = (1 - bPrime - k) / (1 - k);
    }

    return {
        c: Number(c.toFixed(2)),
        m: Number(m.toFixed(2)),
        y: Number(y.toFixed(2)),
        k: Number(k.toFixed(2))
    };
}

function cmykToRgb(c, m, y, k) {
    if (c < 0 || c > 1 || m < 0 || m > 1 || y < 0 || y > 1 || k < 0 || k > 1) {
        throw new Error("CMYK стойностите трябва да са между 0 и 1");
    }

    const r = Math.round(255 * (1 - c) * (1 - k));
    const g = Math.round(255 * (1 - m) * (1 - k));
    const b = Math.round(255 * (1 - y) * (1 - k));

    return { r, g, b };
}

const cmyk = rgbToCmyk(255, 128, 0);
console.log(cmyk);

const rgb = cmykToRgb(0, 0.5, 1, 0);
console.log(rgb);

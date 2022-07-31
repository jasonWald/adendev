const tl = gsap.timeline();
tl.from(
    ".aesthetics h1", 
    {
        y: 250,
        skewY: 0,
        duration: 1.3,
        stagger: {
            amount: 0.4,
        },
    }
);
tl.from(".info p",
{
    y: 250,
    skewY: 8,
    duration: 1.3,
    stagger: {
        amount: 0.4,
    },
}
);
tl.from(
    ".lower__imagination h1",
    {
        x: 700,
        duration: 1,
        opacity: 0,
        stagger: {
            amount: 0.4,
        },
    },
   
);
tl.from(".balance__ p",
{
    y: 250,
    skewY: 5,
    duration: 1.3,
    stagger: {
        amount: 0.4,
    },
}
);
tl.from(
    ".we__do p",
    {
        x: 700,
        duration: 1,
        opacity: 0,
        stagger: {
            amount: 0.4,
        },
    },
   
);
tl.from(".liquid__dance p",
{
    y: 250,
    skewY: 0,
    duration: 2,
    stagger: {
        amount: 0.4,
    },
}
);


export default function Counter() {
    let num = 0;
    const incrementNum = () => {
        num += 1;
        console.log(num);
    };

    return (
        <div>
            <p>the count is:{num}</p>
            <button onClick={incrementNum}>Increment</button>
        </div>
    );

}
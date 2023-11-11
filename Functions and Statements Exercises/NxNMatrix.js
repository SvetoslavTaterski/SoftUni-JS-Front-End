function buildMatrix(num)
{
    for(let i = 0; i < num; i++)
    {
        let line = "";

        for(let z = 0; z < num; z++)
        {
            line += ` ${num}`;
        }

        console.log(line);
    }
}

buildMatrix(3);
export const randomPosition = (): [number, number, number] =>  {

    const x = Math.random() * 20 - 20; // -10에서 10 사이의 랜덤한 값
    const y = Math.random() * 20 - 20; // -10에서 10 사이의 랜덤한 값
    const z = Math.random() * 20 - 20; // -10에서 10 사이의 랜덤한 값

    return [x, y, z];
};
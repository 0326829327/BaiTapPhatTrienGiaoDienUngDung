document.addEventListener('DOMContentLoaded', () => {
    // Hàm tính điểm trung bình
    function calculateAverage(scores) {
        return scores.reduce((sum, score) => sum + score, 0) / scores.length;
    }

    // Hàm xác định đội thắng
    function determineWinner(avgDolphins, avgKoalas, minimumScore = 0) {
        if (avgDolphins >= minimumScore && avgDolphins > avgKoalas) {
            return "Dolphins thắng với điểm trung bình cao hơn!";
        } else if (avgKoalas >= minimumScore && avgKoalas > avgDolphins) {
            return "Koalas thắng với điểm trung bình cao hơn!";
        } else if (avgDolphins >= minimumScore && avgKoalas >= minimumScore && avgDolphins === avgKoalas) {
            return "Cả hai đội hòa nhau!";
        } else {
            return "Không có đội nào thắng vì không đạt đủ điểm tối thiểu!";
        }
    }

    // Dữ liệu test
    const dolphinsScores1 = [96, 108, 89]; // Điểm của Dolphins trong trường hợp 1
    const koalasScores1 = [88, 91, 110]; // Điểm của Koalas trong trường hợp 1

    const dolphinsScoresBonus1 = [97, 112, 101]; // Điểm của Dolphins (Bonus 1)
    const koalasScoresBonus1 = [109, 95, 123]; // Điểm của Koalas (Bonus 1)

    const dolphinsScoresBonus2 = [97, 112, 101]; // Điểm của Dolphins (Bonus 2)
    const koalasScoresBonus2 = [109, 95, 106]; // Điểm của Koalas (Bonus 2)

    // Tính điểm trung bình cho từng trường hợp
    const avgDolphins1 = calculateAverage(dolphinsScores1);
    const avgKoalas1 = calculateAverage(koalasScores1);

    const avgDolphinsBonus1 = calculateAverage(dolphinsScoresBonus1);
    const avgKoalasBonus1 = calculateAverage(koalasScoresBonus1);

    const avgDolphinsBonus2 = calculateAverage(dolphinsScoresBonus2);
    const avgKoalasBonus2 = calculateAverage(koalasScoresBonus2);

    // Kết quả cho từng trường hợp
    const result1 = determineWinner(avgDolphins1, avgKoalas1); // Trường hợp 1
    const resultBonus1 = determineWinner(avgDolphinsBonus1, avgKoalasBonus1, 100); // Bonus 1
    const resultBonus2 = determineWinner(avgDolphinsBonus2, avgKoalasBonus2, 100); // Bonus 2

    // Hiển thị kết quả lên trang web
    document.getElementById('result1').textContent = `Kết quả Trường hợp 1: ${result1}`;
    document.getElementById('resultBonus1').textContent = `Kết quả Bonus 1: ${resultBonus1}`;
    document.getElementById('resultBonus2').textContent = `Kết quả Bonus 2: ${resultBonus2}`;
});
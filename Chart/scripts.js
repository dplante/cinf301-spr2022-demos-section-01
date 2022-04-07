var canvasElement = document.getElementById("votesChart")
var config = {
    type: 
    'bar', 
    // 'pie',
    // 'line',
    // 'radar',
    // 'doughnut',
    // 'polarArea',
        data: 
    {labels: ["Ronaldo", "Plante", "Benzema", "Mbappe", "Salah"],
    datasets:[{ 
        label: "Votes", 
        backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        ],
        data: [16, 20, 12, 13, 15]}],
}
}

var votesChart = new Chart(canvasElement, config) 
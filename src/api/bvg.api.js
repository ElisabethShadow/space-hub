const { createClient } = require('hafas-client');
const bvgProfile = require('hafas-client/p/bvg');

const client = createClient(bvgProfile, 'BvgWidget');

const express = require('express');
const app = express();

app.get('/api/departures/:stationId', async (req, res) => {
    try {
        const departures = await fetchDepartures(req.params.stationId);
        res.json(departures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

async function fetchDepartures(stationId) {
    try {
        const departures = await client.departures(stationId, { duration: 10 });
        return departures;
    } catch (error) {
        console.error("Error fetching BVG departures:", error);
        throw error;
    }
}

module.exports = {
    fetchDepartures
};

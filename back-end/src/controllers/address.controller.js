const getProvince = async (req, res) => {
    try {
        const response = await fetch("https://provinces.open-api.vn/api/p/");
        const data = await response.json();

        return res.json(data);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching provinces" });
    }
};

const getDistricts = async (req, res) => {
    try {
        const { province_id } = req.params;
        const response = await fetch(
            `https://provinces.open-api.vn/api/p/${province_id}?depth=2`
        );
        const data = await response.json();

        return res.json(data);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching districts" });
    }
};

const getVillages = async (req, res) => {
    try {
        const { district_id } = req.params;
        const response = await fetch(
            `https://provinces.open-api.vn/api/d/${district_id}?depth=2`
        );
        const data = await response.json();

        return res.json(data);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching villages" });
    }
};

module.exports = { getProvince, getVillages, getDistricts };
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests from the frontend
app.use(express.json()); // Parse incoming JSON payloads

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your_supabase')) {
    console.warn('⚠️ WARNING: Supabase credentials are missing or using placeholders in .env');
}

const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseKey || 'placeholder-key');

/**
 * POST /api/leads
 * Captures user interest form submissions and inserts them into Supabase
 */
app.post('/api/leads', async (req, res) => {
    try {
        const { fullName, phone, productSelect, quantity } = req.body;

        // Basic validation
        if (!fullName || !phone || !productSelect || !quantity) {
            return res.status(400).json({ 
                success: false, 
                error: 'Missing required fields: fullName, phone, productSelect, quantity' 
            });
        }

        // Map frontend JSON fields to Supabase database columns
        const leadData = {
            nombre_completo: fullName,
            telefono: phone,
            compuesto: productSelect,
            cantidad: parseInt(quantity, 10)
        };

        // Insert into 'leads' table in Supabase
        const { data, error } = await supabase
            .from('leads')
            .insert([leadData])
            .select();

        if (error) {
            console.error('Supabase Error:', error);
            return res.status(500).json({ 
                success: false, 
                error: 'Database insertion failed',
                details: error.message 
            });
        }

        // Success response
        return res.status(201).json({
            success: true,
            message: 'Lead created successfully',
            data: data
        });

    } catch (err) {
        console.error('Server Exception:', err);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
});

// Health check endpoint (useful for Render deployment)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Vyera API is running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 VYERA Backend API is running on http://localhost:${PORT}`);
    console.log(`Health check available at http://localhost:${PORT}/health`);
});

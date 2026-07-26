require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Faltan variables de entorno Supabase. Rellena .env con SUPABASE_URL y SUPABASE_ANON_KEY or NEXT_PUBLIC_ equivalents.');
  process.exit(1);
}

const supabase = createClient(url, key);

async function seed() {
  const sample = [
    { segmento: 'Niños', texto: 'Devocional para Niños: Dios cuida de los más pequeños. (Ejemplo)' },
    { segmento: 'Adolescentes', texto: 'Devocional para Adolescentes: Sé valiente y confía en Dios. (Ejemplo)' },
    { segmento: 'Jóvenes', texto: 'Devocional para Jóvenes: Vive con propósito cada día. (Ejemplo)' },
    { segmento: 'Adultos', texto: 'Devocional para Adultos: Encuentra paz en la oración. (Ejemplo)' },
    { segmento: 'Nuevos Creyentes', texto: 'Devocional para Nuevos Creyentes: Primeros pasos en la fe. (Ejemplo)' },
  ];

  try {
    const { data, error } = await supabase.from('devocionales').insert(sample);
    if (error) throw error;
    console.log('Seed completado:', data);
  } catch (err) {
    console.error('Error al insertar datos de ejemplo:', err.message || err);
    process.exit(1);
  }
}

seed();

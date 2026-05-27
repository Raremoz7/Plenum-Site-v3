<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $baseUrl = 'https://plenum.com.br';
        $lastmod = now()->toDateString();

        $urls = [
            ['loc' => $baseUrl, 'priority' => '1.0'],
            ['loc' => $baseUrl . '/funcionalidades', 'priority' => '0.9'],
            ['loc' => $baseUrl . '/modulos/operacao-comercial', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/modulos/comunicacao', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/modulos/inteligencia-ia', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/integracoes', 'priority' => '0.8'],
            ['loc' => $baseUrl . '/precos', 'priority' => '0.9'],
            ['loc' => $baseUrl . '/contato', 'priority' => '0.7'],
        ];

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

        foreach ($urls as $url) {
            $xml .= '  <url>' . "\n";
            $xml .= '    <loc>' . htmlspecialchars($url['loc']) . '</loc>' . "\n";
            $xml .= '    <lastmod>' . $lastmod . '</lastmod>' . "\n";
            $xml .= '    <changefreq>weekly</changefreq>' . "\n";
            $xml .= '    <priority>' . $url['priority'] . '</priority>' . "\n";
            $xml .= '  </url>' . "\n";
        }

        $xml .= '</urlset>';

        return response($xml, 200, ['Content-Type' => 'application/xml']);
    }
}

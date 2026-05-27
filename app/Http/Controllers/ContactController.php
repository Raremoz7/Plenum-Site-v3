<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nome' => ['required', 'string', 'max:255'],
            'empresa' => ['required', 'string', 'max:255'],
            'whatsapp' => ['required', 'string', 'max:20'],
            'mensagem' => ['nullable', 'string', 'max:2000'],
        ]);

        return redirect()->back()->with('success', 'Mensagem recebida. Retornaremos em breve.');
    }
}

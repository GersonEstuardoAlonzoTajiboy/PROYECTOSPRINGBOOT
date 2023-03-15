package com.api.formulario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.api.formulario.model.Color;
import com.api.formulario.repository.ColorRepository;

@RestController
@RequestMapping("color")
public class ColorController {
	@Autowired(required=true)
	private ColorRepository repositorio;
	
	@GetMapping(value="listar")
	private List<Color> listar(){
		return  repositorio.findAll();
	}
	
	@PostMapping(value="crear")
	private Color crear(@RequestBody Color colorFrontEnd) {
		Color color = new Color();
		color.setNombre(colorFrontEnd.getNombre());
		repositorio.save(color);
		return color;
	}
	
	@PutMapping(value="modificar")
	private Color modificar(@RequestBody Color colorFrontEnd) {
		Color color = repositorio.findById(colorFrontEnd.getId());
		if (color!=null) {
			color.setNombre(colorFrontEnd.getNombre());
			repositorio.save(color);
			return color;	
		}else return colorFrontEnd;	
	}
	
	@DeleteMapping(value="eliminar/{id}")
	private Color eliminar(@PathVariable("id") Long id) {
		Color color = repositorio.findById(id);
		if (color!=null) {
			repositorio.delete(color);
		}
		return color;
	}
}

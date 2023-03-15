package com.api.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.formulario.model.Color;

@Repository
public interface ColorRepository extends CrudRepository<Color, Integer>, JpaRepository<Color, Integer>{

	Color findById(Long id);
}

package com.api.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.formulario.model.Pais;


@Repository
public interface PaisRepository extends CrudRepository<Pais, Integer>, JpaRepository<Pais, Integer>{

	Pais findById(Long id);
}

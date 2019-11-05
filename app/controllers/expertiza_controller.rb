# frozen_string_literal: true

class ExpertizaController < ApplicationController
  layout "expertiza"

  def index
    @expertiza_props = { name: "Pratik and Akshay" }
  end
end

class DynamicClass

  def self.create_class(class_name)
    Object.const_set(class_name, Class.new)
  end

  def self.create_method(class_name, method_name, method_body)
    class_name.class_eval do
      define_method(method_name) do
        puts method_body
        eval "puts " + "'#{ method_body }'"
      end
    end
  end

end
